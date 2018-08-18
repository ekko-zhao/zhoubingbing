import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { validateZhname } from './zhname.validator';

@Directive({
    selector: '[validateZhname][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: validateZhname, multi: true }
    ]
})
export class ZhnameValidator {
}
/* 验证规则以字符长度计算的，中文占俩个字符长度 */
