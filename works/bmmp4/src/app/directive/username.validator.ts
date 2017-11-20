import { FormControl } from '@angular/forms';
export function validateUsername(c: FormControl) {
    let regexp = /^[A-Za-z0-9\u4e00-\u9fa5][A-Za-z0-9_\u4e00-\u9fa5]+$/;

    let strlen = 0;
    let value = c.value;
    if(!value) return;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 255)
            strlen += 2;
        else
            strlen++;
    }

    return regexp.test(c.value) && (strlen >= 6 && strlen <= 30)  ? null : {
        validate: { valid: false }
    }
}
