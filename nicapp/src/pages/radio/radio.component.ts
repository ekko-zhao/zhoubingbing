import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl

} from '@angular/forms';

@Component({
    templateUrl: 'radio.component.html'
})
export class RadioComponent {
    langs;
    langForm;
    relationship;

    constructor() {
        /* this.langForm = new FormGroup({
            "langs": new FormControl({ value: 'rust', disabled: false })
        }); */
    }

    doSubmit(event) {
        //console.log('Submitting form', this.langForm.value);
        console.log(this.relationship);
        event.preventDefault();
    }
}
