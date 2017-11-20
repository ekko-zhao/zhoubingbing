/* 交易数据分析 */
import { Component, OnInit, ViewChild, Optional, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

import { HttpService } from '@service/http-service';
import { MyService } from '@service/my-service';
import { regex } from '@service/regex';
import { env } from '@service/environment';

@Component({
    templateUrl: './analyse.html',
    providers: [
        HttpService,
        DatePipe
    ]
})
export class AnalyseComponent {
    // 表单
    public form = {};
    public postForm = {};
    public regex = regex;

    // 数据 list
    public items = [];

    // 设置 存储缓存的键
    public formStorageKey: string = 'dataAnalyseForm';

    constructor(
        private http: HttpService,
        @Optional() private myService: MyService,
        private datePipe: DatePipe
    ) {
        // 表单缓存
        let formStorage = myService.getStorage('session', this.formStorageKey);
        this.form = formStorage ? formStorage : this.form;

        var defaultOptionsZhCn = {
            lang: {
                contextButtonTitle: '图表导出菜单',
                decimalPoint: '.',
                downloadJPEG: "下载JPEG图片",
                downloadPDF: "下载PDF文件",
                downloadPNG: "下载PNG文件",
                downloadSVG: "下载SVG文件",
                drillUpText: "返回 {series.name}",
                loading: '加载中...',
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                noData: "没有数据",
                numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
                printChart: "打印图表",
                resetZoom: '重置缩放比例',
                resetZoomTitle: '重置为原始大小',
                shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                thousandsSep: ',',
                shortWeekdays: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            }
        };
        Highcharts.setOptions(defaultOptionsZhCn);
    }



    // 查询时间
    public timeStart = 'startDate';
    public timeEnd = 'endDate';

    // 查询
    public search(e?, page?: number, size: number = env['itemsPerPage']) {

        if (e && e !== true) {
            this.postForm = {};
            this.postForm = Object.assign({}, this.form);

            /* 如果查询条件有时间 需要特殊处理 */
            let f = this.myService.formatTime(this);
            if (!f) return;

            this.myService.setStorage('session', this.formStorageKey, this.form);
        }
        // 是否勾选直连
        let url: string;
        if (this.postForm[this.timeStart] === this.postForm[this.timeEnd] || this.postForm['isDirect'] === '1') {
            url = 'api/v1/dataAnalysis/queryDataByDayOrHour';
        } else {
            url = 'api/v1/dataAnalysis/queryByTranType';
        }

        window['loading']['open']();
        this.http.post(url, this.postForm).subscribe(
            response => {
                window['loading']['close']();
                if (response['retCode'] === '000000') {
                    this.items = response['data'];
                    this.hChartsConfig();
                } else {
                    alert(response['retMsg']);
                }
            },
            error => {
                window['loading']['close']();
                alert("网络错误，请求数据失败");
            }
        )
    }
    // 商户号选择
    @ViewChild('listMerchant') listMerchant: ViewChild;
    @ViewChild('tranTypeCheckbox') tranTypeCheckbox: ViewChild;

    // 重置表单 -----------------------------------------------------------------------
    // @ViewChild('searchForm') public searchForm;
    public reset() {
        this.myService.removeStorage('session', this.formStorageKey);

        // 初始化表单
        this.form = {};
        this.form['isDirect'] = '0';
        let date = new Date();
        this.form[this.timeStart] = date;
        this.form[this.timeEnd] = date;

        // 清空商户号 选择
        this.listMerchant['rest']();

        // 交易场景
        this.tranTypeCheckbox['rest']();
    }

    ngOnInit() {
        // 查询 数据 - 如果有查询条件
        let formStorage = this.myService.getStorage('session', this.formStorageKey);

        if (formStorage) {
            let start = formStorage[this.timeStart];
            let end = formStorage[this.timeEnd];

            this.postForm = formStorage;
            if (start) {
                this.postForm[this.timeStart] = this.datePipe.transform(start, env['format']);
            }
            if (end) {
                this.postForm[this.timeEnd] = this.datePipe.transform(end, env['format']);
            }
        } else {
            let date = new Date();
            // 初始化表单
            this.form[this.timeStart] = date;
            this.form[this.timeEnd] = date;
            this.form['isDirect'] = '0';

            this.postForm[this.timeStart] = this.datePipe.transform(date, env['format']);
            this.postForm[this.timeEnd] = this.datePipe.transform(date, env['format']);
        }
        this.search();
    }


    // 图表 -----------------------------------------------------------------------------
    // 处理数据
    public handleData = function (data, key) {
        let d = [];
        for (let list of data) {
            let pro: any;
            if (key === 'tranDate') {
                // 天
                pro = this.datePipe.transform(list[key], 'MM-dd');
                d.push(pro);
            } else {
                // 小时
                d.push(parseInt(list[key]));
            }
        }
        return d;
    }

    @ViewChild('chart') chart: ElementRef;
    public chartContainer: any;
    public chartType = 'amount';

    // 按小时 或天
    public hChartsConfig(str?) {
        if (!str) str = this.chartType;
        let config: any;
        var flag = this.postForm[this.timeStart] === this.postForm[this.timeEnd];


        // 支付场景 是 多天
        if (!flag && this.postForm['isDirect'] === '0') {
            let code = [];
            for (let items of this.items) {
                let index = code.findIndex((element) => {
                    return items.typeName === element;
                });

                if (index === -1) {
                    code.push(items.typeName);
                }
            }

            let series = []
            for (let typeName of code) {
                let items = this.items.filter((item) => {
                    return typeName === item.typeName;
                })
                series.push({
                    name: typeName,
                    data: items.map(function (element) {
                        if (str === 'amount')
                            return parseInt(element.tranAmt);
                        else
                            return parseInt(element.tranCnt);
                    })
                })
            }

            if (str === 'amount') {
                this.chartType = 'amount';
                config = {
                    x: 'tranDate',
                    y: '交易金额汇总 (元)',
                    unit: '元',
                    series: series
                }
            } else if (str === 'count') {
                this.chartType = 'count';
                config = {
                    x: 'tranDate',
                    y: '交易笔数汇总 (笔)',
                    unit: '笔',
                    series: series
                }
            }
            this.resetHChartsColumnar(config);
            return;
        }

        // 支付场景 否
        if (str === 'amount') {
            this.chartType = 'amount';
            config = {
                x: flag ? 'tranTime' : 'tranDate',
                y: '交易金额汇总 (元)',
                unit: '元',
                series: [{
                    name: '交易金额',
                    data: this.handleData(this.items, 'tranAmt'),
                    color: '#7cb5ec',
                }]
            }
        } else if (str === 'count') {
            this.chartType = 'count';
            config = {
                x: flag ? 'tranTime' : 'tranDate',
                y: '交易笔数汇总 (笔)',
                unit: '笔',
                series: [{
                    name: '交易笔数',
                    data: this.handleData(this.items, 'tranCnt'),
                    color: '#7cb5ec',
                }]
            }
        }
        this.resetHCharts(config);
    }

    // 基础条形图
    public resetHCharts(config) {
        var options = {
            chart: {
                type: 'column'
            },
            title: {
                text: '交易数据分析'
            },
            subtitle: {
                // text: '数据来源: WorldClimate.com'
            },
            legend: {
                enabled: true
            },
            xAxis: {
                categories: this.handleData(this.items, config.x),
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: config.y
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">' + (config.x === 'tranTime' ? '当天' : '') + '{point.key}' + (config.x === 'tranTime' ? ':00' : '') + '</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} ' + config.unit + '</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    events: {
                        legendItemClick: function (e) {
                            return false; // 直接 return false 即可禁用图例点击事件
                        }
                    }
                }
            },
            series: config.series,
            credits: {
                enabled: false,
            }
        };

        // 图表初始化函数
        if (this.chartContainer) this.chartContainer['destroy'];
        this.chartContainer = Highcharts.chart(this.chart.nativeElement, options);
    }

    // 堆叠柱状图
    public resetHChartsColumnar(config) {
        var options = {
            chart: {
                type: 'column'
            },
            title: {
                text: '交易数据分析'
            },
            xAxis: {
                categories: this.handleData(this.items, config.x),
            },
            yAxis: {
                min: 0,
                title: {
                    text: config.y
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                //enabled: false,
                /* align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true, */
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                /* shadow: false */

            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        '总量: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black'
                        }
                    }
                },
                series: {
                    events: {
                        legendItemClick: function (e) {
                            return false; // 直接 return false 即可禁用图例点击事件
                        }
                    }
                }
            },
            series: config.series,
            credits: {
                enabled: false,
            }
        }

        // 图表初始化函数
        if (this.chartContainer) this.chartContainer['destroy'];
        this.chartContainer = Highcharts.chart(this.chart.nativeElement, options);
    }

}
