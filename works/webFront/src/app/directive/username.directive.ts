import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { validateUsername } from '@myDirective/username.validator';

@Directive({
    selector: '[validateUsername][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateUsername, multi: true }
    ]
})
export class UsernameValidator {
}
