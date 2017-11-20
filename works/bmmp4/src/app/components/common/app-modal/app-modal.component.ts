import { Component, ViewChild } from "@angular/core"
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-modal',
    templateUrl: 'app-modal.html',
    styleUrls: ['app-modal.css.less']
})
export class AppModalComponent {
    @ViewChild('appModalModal') appModalModal: ModalDirective;

    public items: any;
    public showModal(data?: any) {
        if (data) this.items = data;
        this.appModalModal.show();
    }
    public closeModal() {
        this.appModalModal.hide();
    }
}
