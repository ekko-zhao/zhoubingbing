/* 页面表单 */
import { Component, Optional, Input, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { HttpService } from 'src/services/http-service';
import { makePinyinFrist } from 'src/services/strChineseFirstPY';

@Component({
    selector: 'province-city',
    templateUrl: './province-city.html',
    styleUrls: ['./province-city.css.less']
})
export class ProvinceCityComponent implements OnDestroy {
    // 必须-表单 input
    @Input('transmitinput') transmitinput: ViewChild;

    // 必须-form 对象
    @Input('transmitform') transmitform;

    // 可选-自定义字段名
    @Input('config') config = {
        province: 'province',
        city: 'city',
        county: 'county',
        districtName: 'districtName'
    };

    constructor(
        private elementRef: ElementRef,
        @Optional() private http: HttpService,
    ) {
        this.form.select = 'province';
        this.onBodyDown = this.onBodyDown.bind(this);
    }

    /* 组件显示 */
    public visible: boolean = false;
    /* 正在加载数据 */
    public listLoadingFlag: boolean = false;
    /* 初始化分组 */
    public setProvinceGroupFlag: boolean = false;
    /* 表单验证状态 */
    public startFlag: boolean = false;

    // 表单
    public form = <any>{};

    // 省市区数据
    public provinceList = [];
    public cityList = [];
    public countyList = [];

    // transmitinput 获取焦点
    public inputfocus($event) {
        if (this.visible) return;
        this.visible = !this.visible;
        document.querySelector('body')['addEventListener']('click', this.onBodyDown, false);
        // 加载省
        if (!this.setProvinceGroupFlag) this.getList('province');
    }

    public onBodyDown(event) {
        // 点击表单本身 或 组件自身
        if (!this.visible || event.target === this.transmitinput) return;

        let el = event.target;
        let flag = false;
        while (el) {
            if (el.parentNode === this.elementRef.nativeElement) {
                el = null;
                flag = true;
            } else {
                el = el.parentNode;
            }
        }
        if (flag) return;
        this.visible = !this.visible;
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
    }

    // 加载省市区
    public getList(type: string, code: string = '', callback?: Function) {
        if (this.listLoadingFlag) {
            alert('正在加载数据，请稍后');
            return;
        }

        let data = {
            type: type.toUpperCase(),
            code: code,
        };

        // 缓存列表
        let sesstion = sessionStorage.getItem('provinceCity' + code);
        if (sesstion) {
            sesstion = JSON.parse(sesstion);
            this[type + 'List'] = sesstion;
            if (type === 'province') this.setProvinceGroup(sesstion);
            if (callback) callback(sesstion);
            return;
        }

        // loading
        this.listLoadingFlag = !this.listLoadingFlag;

        // 查询
        this.http.post('/api/district/v1/load', data).subscribe(
            response => {
                this.listLoadingFlag = !this.listLoadingFlag;
                if (response['code'] !== '000000') return;
                sessionStorage.setItem('provinceCity' + code, JSON.stringify(response.data));
                this[type + 'List'] = response['data'];
                // 处理分组
                if (type === 'province') this.setProvinceGroup(response['data']);
                if (callback) callback(response['data']);
            },
            error => { this.listLoadingFlag = !this.listLoadingFlag }
        )
    }

    // 禁用状态
    selectChange(select) {
        if (select === 'city' && this.cityList.length === 0) {
            this.form.select = 'province';
        }
        if (select === 'county' && this.countyList.length === 0) {
            if (this.cityList.length === 0)
                this.form.select = 'province';
            else
                this.form.select = 'city';
        }
    }

    // 省分组
    public provinceGroup = [
        { title: "A-F", letters: "ABCDEF", items: [] },
        { title: "G-M", letters: "GHJKLM", items: [] },
        { title: "N-S", letters: "NOPQRS", items: [] },
        { title: "T-Z", letters: "TWXYZ", items: [] }
    ]

    public setProvinceGroup(list) {
        for (let item of list) {
            let str = item.name[0];
            let o = item;
            // 处理多音字
            if (str === "重") {
                this.provinceGroup[0].items.push(o);
            } else if (str === "广") {
                this.provinceGroup[1].items.push(o);
            } else {
                let frist = makePinyinFrist(str)[0];
                for (let group of this.provinceGroup) {
                    if (group.letters.indexOf(frist) > -1) {
                        group.items.push(o);
                        break;
                    }
                }
            }
        }
        for (let group of this.provinceGroup) {
            group.items.sort((a, b) => {
                let stra = a.name;
                let frista = makePinyinFrist(stra);
                let strb = b.name;
                let fristb = makePinyinFrist(strb);
                return frista.localeCompare(fristb);
            })
        }
        this.setProvinceGroupFlag = !this.setProvinceGroupFlag;
    }

    // 选择省
    public provinceChange(item) {
        this.startFlag = true;

        // tab city
        this.form.select = 'city';

        // 点击当前选择状态不发生处理
        if (item !== this.transmitform[this.config['province']]) {
            this.transmitform[this.config['province']] = item;
            this.transmitform[this.config['city']] = {};
            this.transmitform[this.config['county']] = {};
            this.transmitform[this.config.districtName] = item.name;

            this.cityList = [];
            this.countyList = [];
            // 加载城市
            this.getList('city', item.code, (list) => {
                if (list.length === 1) {
                    this.cityChange(list[0]);
                }
            });
        }

        /* this.cityList = [
            { code: '111', name: "合肥" },
            { code: '222', name: "安庆" }
        ] */
    }

    // 选择城市
    public cityChange(item) {
        this.form.select = 'county';
        if (item !== this.transmitform[this.config['city']]) {
            this.transmitform[this.config['city']] = item;
            this.transmitform[this.config['county']] = {};
            this.transmitform[this.config.districtName] = this.transmitform[this.config['province']]['name'] + '/' + item.name;
            this.countyList = [];
            this.getList('county', item.code);
        }

        /* this.countyList = [
            { code: '11', name: "鸠江区" },
            { code: '22', name: "镜湖区" }
        ] */
    }

    // 选择县
    public countyChange(item) {
        if (item !== this.transmitform[this.config['county']]) {
            this.transmitform[this.config['county']] = item;
            this.transmitform[this.config.districtName] = this.transmitform[this.config['province']]['name'] + '/' + this.transmitform[this.config['city']]['name'] + '/' + item.name;
        }

        // 结束关闭 下拉框
        this.visible = !this.visible;
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
    }

    ngOnDestroy() {
        document.querySelector('body')['removeEventListener']('click', this.onBodyDown);
    }

    ngOnInit() {
        /* let list = [
            { code: '8', name: "广西" },
            { code: '9', name: "贵州" },
            { code: '20', name: "新疆" },
            { code: '12', name: "宁夏" },
            { code: '13', name: "青海" },
            { code: '14', name: "山东" },
            { code: '15', name: "上海" },
            { code: '21', name: "西藏" },
            { code: '10', name: "辽林" },
            { code: '17', name: "陕西" },
            { code: '2', name: "北京" },
            { code: '3', name: "重庆" },
            { code: '1', name: "安徽" },
            { code: '5', name: "福建" },
            { code: '6', name: "甘肃" },
            { code: '7', name: "广东" },
            { code: '18', name: "四川" },
            { code: '19', name: "天津" },
            { code: '11', name: "内蒙古" },
            { code: '16', name: "山西" },
            { code: '22', name: "云南" },
            { code: '23', name: "浙江" }
        ]
        this.setProvinceGroup(list); */
    }
}

/*
    .html
    <div class="col-xs-9 col-sm-8 px-0">
        <input class="form-control rounded-0 text-sm bg-white" type="text" name="form.districtName" id="form.districtName" [ngClass]="{'border-danger': (theinputprovince.invalid || theinputcity.invalid || theinputcounty.invalid) && provinceCity['startFlag'] }"
            [(ngModel)]="form.districtName" (keyup)="form.districtName=$event.target.value" (focus)="provinceCity['inputfocus']($event)"
            #formDistrictName readonly>
        <div class="position-relative">
            <province-city [transmitinput]="formDistrictName" [transmitform]="form" #provinceCity></province-city>
        </div>
        <div class="d-none">
            <input type="text" name="form.province" [(ngModel)]="form.province.code" #theinputprovince="ngModel" required>
            <input type="text" name="form.city" [(ngModel)]="form.city.code" #theinputcity="ngModel" required>
            <input type="text" name="form.county" [(ngModel)]="form.county.code" #theinputcounty="ngModel" required>
        </div>
    </div>

    .ts 文件
    // 表单
    public form = <any>{
        province: {},
        city: {},
        county: {},
        districtName:'districtName'
    };

    // 可选配置 如果和默认配置的字段名不一样， 需要自通过 config 选项指定字段名， form 和 config属性必须一致
    public form = <any>{
        province2: {},
        city2: {},
        county2: {}
    };
    public config ={
        province: 'province2',
        city: 'city2',
        county: 'county2',
        districtName: 'districtName2'
    }
*/
