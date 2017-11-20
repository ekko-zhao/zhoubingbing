import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'table-custom',
    templateUrl: './table-custom.html',
    styleUrls: ['./table-custom.css.less']
})
export class TableCustomComponent {
    @Input() appModal;
    @Input() transmit;

    @Output() onListen = new EventEmitter<any>();
    public listen() {
        this.appModal.closeModal();
        this.onListen.emit(this.storage);
    }

    hide() {
        this.appModal.closeModal();
    }

    // 用于记录 用户交互
    public storage = [];

    // 初始化状态
    public modalInit() {
        let th = this.transmit['th'];
        let storage = this.storage = this.transmit['storage'].slice();

        for (let itemb of th) {
            itemb.select = false;
        }
        for (let itema of storage) {
            for (let itemb of th) {
                if (itema.text === itemb.text) {
                    itemb.select = true;
                    break;
                };
            }
        }
    }

    selectToggle(require: boolean, item: any) {
        if (require) return;
        item.select = !item.select;

        this.storage = this.transmit['th'].filter((value, index, items) => {
            return value.select === true;
        })
    }

}

/*
.html
    <app-modal #appModalCustom>
        <table-custom class="modal-sample" #tableCustom [appModal]="appModalCustom" [transmit]="table" (onListen)="tableDone($event)"></table-custom>
    </app-modal>

.ts
    // 表头定制-----------------------------------------------------------------------
    @ViewChild('appModalCustom') public appModalCustom;
    @ViewChild('tableCustom') public tableCustom;

    public tableCustomStart() {
        // console.log(this.tableCustom);
        this.tableCustom.selectInit()
        this.appModalCustom.showModal();
    }
    public tableDone(data) {
        this.myService.setStorage('local', this.tableLocalKey, data);
        this.table.storage = data;
    }
*/
