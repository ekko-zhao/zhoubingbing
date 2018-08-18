import { Component, Input } from "@angular/core"

@Component({
    selector: 'bttton-loading',
    templateUrl: './button-loading.html',
    styleUrls: ['./button-loading.css.less']
})
export class ButtonLoadingComponent {
    @Input() type: string;
    @Input() queryStatus: boolean;

    public src: string;
    ngOnInit() {
        if (!this.type) this.type = 'info';
        this.src = '/static/images/loading_' + this.type + '.gif';
    }
}
