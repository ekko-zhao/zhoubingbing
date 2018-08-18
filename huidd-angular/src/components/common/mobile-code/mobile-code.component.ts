import { Component, Input, OnInit } from "@angular/core"

@Component({
    selector: 'mobile-code',
    templateUrl: 'mobile-code.html'
})
export class MobileCodeComponent implements OnInit {
    @Input("transmit") transmit;
    constructor() { }

    public flag: boolean = true;
    public text: string;
    public time: number;

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

    ngOnInit() {
        this.transmit = Object.assign(
            {
                text: "获取验证码",
                time: 60
            },
            this.transmit
        )
        this.text = this.transmit.text;
        this.time = this.transmit.time;
    }

}

/*
    <div class="row mx-0 m-b-md">
        <div class="form-group" style="position: relative; margin-right: 0px;">
            <label class="col-xs-3 col-sm-4 pl-0 font-bold p-t-xs text-right" for="form.cellPhoneCode">
                <span class="text-danger">*</span>手机验证码：</label>
            <div class="col-xs-9 col-sm-8 pl-0" style="position:relative; padding-right:100px;">
                <input class="form-control rounded-0 text-sm" type="text" name="form.cellPhoneCode" id="form.cellPhoneCode" maxlength="6"
                    [(ngModel)]="form.cellPhoneCode" (ngModelChange)="verifyChange(form.cellPhoneCode)" (keyup)="form.cellPhoneCode=$event.target.value"
                    [pattern]="regex['verifyCode']" required>
                <mobile-code #mobilecode [transmit]="transmit">
                    <button mobile-code class="btn btn-info rounded-0 text-sm text-center" style="position:absolute;top:0;right:0; line-height:18px; width:82px;"
                        [disabled]="!mobilecode['flag']" (click)="setCode(mobilecode['flag']); mobilecode['timeStart']();">{{mobilecode['text']}}</button>
                </mobile-code>
            </div>
        </div>
    </div>

    // 初始化数据
    public transmit = {
        text: '获取短信'
    }

*/
