/* app 用户管理 新增 */
import { Component, Optional, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http-service';
import { MyService } from 'src/services/my-service';
import { regex } from 'src/services/regex';

@Component({
    templateUrl: './edit.html'
})

export class EditComponent {
    @ViewChild('goBack') public goBack;
    @ViewChild('provinceCity') public provinceCity;

    constructor(
        private activatedRoute: ActivatedRoute,
        @Optional() private http: HttpService,
        @Optional() private myService: MyService,
    ) {
        this.form.key3 = "";
        myService.getSelectList(this, 'selectList', 'role', '/api/url');
    }
    public id: string = this.activatedRoute.snapshot.params['id'];

    public selectList = <any>{};

    // 表单
    public form = <any>{
        province: {},
        city: {},
        county: {},
        districtName: ''
    };
    // 用于重置
    public phform = <any>{};
    public regex = regex;

    // 提交
    public queryStatus = false;
    public submit() {
        this.queryStatus = true;
        let data = Object.assign({}, this.form);
        data.district = this.form.county.code;
        this.http.post('/api/corporation/v1/create', data).subscribe(
            response => {
                this.queryStatus = false;
                if (response['code'] !== '000000') return;
                this.goBack.back();
                alert('编辑用户成功');
            },
            error => { this.queryStatus = false; }
        )
    }

    // 用户信息
    public search() {
        this.queryStatus = true;
        this.http.post('/api/corporation/v1/queryByPager', { example: { corporation: this.id } }).subscribe(
            response => {
                if (response['code'] === '000000') {
                    this.queryStatus = false;
                    Object.assign(this.form, response['data'][0] || {});
                    Object.assign(this.phform, response['data'][0] || {});

                    // 回填行政区
                    this.getProvinceList()
                }

            },
            error => { this.queryStatus = false; })
    }

    // 重置
    public reset() {
        Object.assign(this.form, this.phform);
        this.getProvinceList();
    }

    // 省市区
    public setDistrictName() {
        this.form.districtName = this.form.province['name'] + '/' + this.form.city['name'] + '/' + this.form.county['name'];
        this.queryStatus = false;
    }

    public getProvinceList() {
        this.provinceCity['getList']('province', '', (list) => {
            for (let item of list) {
                if (item.code === this.form.provinceCode) {
                    this.form.province = item;
                    this.getCityList();
                }
            }
        })
    }

    public getCityList() {
        this.provinceCity['getList']('city', this.form.provinceCode, (list) => {
            for (let item of list) {
                if (item.code === this.form.cityCode) {
                    this.form.city = item;
                    this.getCountyList();
                }
            }
        })
    }

    public getCountyList() {
        this.provinceCity['getList']('county', this.form.cityCode, (list) => {
            for (let item of list) {
                if (item.code === this.form.countyCode) {
                    this.form.county = item;
                    this.setDistrictName();
                }
            }
        })
    }
    ngOnInit() {
        this.search();
    }
}
