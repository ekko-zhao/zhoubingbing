import { Component, Input, SimpleChanges } from '@angular/core';
import { env } from 'src/services/environment';

@Component({
    selector: 'app-pagination',
    templateUrl: './app-pagination.html',
    styleUrls: [
        './app-pagination.css.less'
    ]
})
export class AppPaginationComponent {
    @Input() paginationData: any = {};
    @Input() queryStatus: boolean;

    public form = {};
    public data = {
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: env['itemsPerPage'],
        maxSize: 7,
        smallnumPages: 0,
        boundaryLinks: true,
        directionLinks: true,
        firstText: '&laquo',
        lastText: '&raquo;',
        previousText: '&lsaquo;',
        nextText: '&rsaquo;',
        rotate: false,
        pageChanged: function ({ page, itemsPerPage }) {
            // 阻止查询两次
            if (this.stopSearch) {
                this.stopSearch = false;
                return;
            }
            // 查询
            this.target[this.search](null, page, itemsPerPage);
        },
        // 父组件的引用
        target: undefined,
        // 阻止查询两次
        stopSearch: false,
        // 查询方法名
        search: 'search'
    }

    public setPage(pageNo: any): void {
        pageNo = parseInt(pageNo);
        if (!pageNo) return;
        this.data.currentPage = pageNo;
    }

    ngOnInit() {
        // 从父组件继承属性， 更改默认值
        Object.assign(this.data, this.paginationData);
    }

    //钩子函数 当parent组件传递的值 paginationData 改变时触发
    ngOnChanges(changes: { [proKey: string]: SimpleChanges }) {
        for (let proName in changes) {
            let changeProp = changes[proName];

            if (proName !== 'paginationData' || changeProp.firstChange) return;
            this.data.totalItems = changeProp.currentValue['totalItems'];
            // 如果需要改变当前页 需要对象传入 currentPage
            // 用于查询回归第一页
            setTimeout(() => {
                this.setPage(changeProp.currentValue['currentPage']);
            }, 60)
            // if (changeProp.currentValue['currentPage']) { }
            //changeProp：{previousValue, currentValue, firstChange }
        }
    }

}

/*
    <app-pagination #appPagination [paginationData]="paginationData" [queryStatus]="queryStatus"></app-pagination>

     @ViewChild('appPagination') public appPagination;
    public paginationData: any = {
        target: this
    }

    // 查询后 重新给对象 赋值
    this.paginationData = {
        totalItems: response['total'],
        currentPage: 1
    };

    // 增删改 search();
    // 默认加载数据 search(true);

    // 测试用
    this.paginationData = Object.assign({}, this.paginationData, {
        totalItems: 100,
        currentPage: 1
    })
*/
