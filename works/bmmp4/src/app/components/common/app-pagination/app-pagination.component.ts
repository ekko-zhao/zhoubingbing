import { Component, Input, SimpleChanges } from '@angular/core';
import { env } from '@service/environment';

@Component({
    selector: 'app-pagination',
    templateUrl: './app-pagination.html',
    styleUrls: [
        './app-pagination.css.less'
    ]
})
export class AppPaginationComponent {
    @Input() paginationData: any = {};

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
        pageChanged: ($event) => {
            //$event:{page, itemsPerPage}
        }
    }

    public setPage(pageNo: any): void {
        pageNo = parseInt(pageNo);
        if (!pageNo) return;
        this.data.currentPage = pageNo;
    }

    ngOnInit() {
        Object.assign(this.data, this.paginationData);
    }

    //钩子函数 当parent组件传递的值 paginationData 改变时触发
    ngOnChanges(changes: { [proKey: string]: SimpleChanges }) {
        for (let proName in changes) {
            let changeProp = changes[proName];
            if (changeProp.firstChange) return;
            this.data.totalItems = changeProp.currentValue['totalItems'];
            // 如果需要改变当前页 需要对象传入 currentPage
            // 用于查询回归第一页
            if (changeProp.currentValue['currentPage']) {
                setTimeout(() => {
                    this.setPage(changeProp.currentValue['currentPage']);
                }, 100)
            }
            //changeProp：{previousValue, currentValue, firstChange }
        }
    }

}

/*
    <app-pagination [paginationData]="paginationData"></app-pagination>
    public paginationData: any = {
        totalItems: 50,
        pageChanged: () => {
            this.search();
        }
    }

    // 查询后 重新给对象 赋值
    this.paginationData = {
        totalItems: 200,
        currentPage:1
    }

*/
