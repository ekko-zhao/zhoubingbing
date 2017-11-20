import { Component, Input, OnInit } from "@angular/core"

@Component({
    selector: 'mobile-code',
    templateUrl: 'mobile-code.html',
    styleUrls: ['mobile-code.css.less']
})
export class MobileCodeComponent implements OnInit {
    constructor() {

    }
    @Input("transmit") transmit;
    public flag: boolean = true;

    public text: string;
    public time: number;

    ngOnInit() {
        this.transmit = Object.assign(
            {
                text: "获取短信",
                time: 60
            },
            this.transmit
        )
        this.text = this.transmit.text;
        this.time = this.transmit.time;
    }

    public timeStart() {
        if (!this.flag) return;
        this.flag = false;
        this.time--;
        this.text = this.time + ' s';
        var timer = setInterval(() => {
            this.time--;
            this.text = this.time + ' s';
            if (this.time <= 0) {
                this.flag = true;
                this.text = this.transmit.text;
                this.time = this.transmit.time;
                clearInterval(timer);
            }
        }, 1000)
    }

}

/*
    <mobile-code #mobilecode [transmit]="transmit">
        <button mobile-code class="btn btn-info text-center" style="position:absolute;top:0;right:0; line-height:23px; width:82px;"
            [disabled]="!mobilecode['flag'] || formMobile.invalid" (click)="setCode(mobilecode['flag']); mobilecode['timeStart']();">{{mobilecode['text']}}</button>
    </mobile-code>

    // 初始化数据
    public transmit ={
        text: '获取短信'
    }

*/
