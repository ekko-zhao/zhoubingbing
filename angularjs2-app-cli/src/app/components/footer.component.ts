import { Component } from '@angular/core';
//import { Promise } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

function aa(v: string) {
    console.log(v)
    return function aa(target, key) {
        console.log(target)
        console.log(key);
        //return 'dddddddddddd'
    }
}


@Component({
    //selector: 'footer',
    template: `<h3>footer:{{ name}}</h3>`,
    styles: [
        `h3{border-top:1px #333 solid; color:red;}`,
        `h3{ text-align:center}`
    ]
})
export class FooterComponent {
    @aa('adsf')
    public name: string;

    public setname(name: string) {
        this.name = name;
    }



    constructor() {
        //var a = this.setname('zhoub1b');
    }


}
