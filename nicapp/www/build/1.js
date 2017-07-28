webpackJsonp([1],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPage2Module", function() { return OtherPage2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other_page2__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtherPage2Module = (function () {
    function OtherPage2Module() {
    }
    return OtherPage2Module;
}());
OtherPage2Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__other_page2__["a" /* OtherPage2 */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__other_page2__["a" /* OtherPage2 */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__other_page2__["a" /* OtherPage2 */]
        ]
    })
], OtherPage2Module);

//# sourceMappingURL=other-page2.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtherPage2 = (function () {
    function OtherPage2(viewCtrl, navCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.item = params.data.item;
    }
    OtherPage2.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    // ionViewDidEnter() {
    OtherPage2.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log(this.navCtrl);
        console.log(this.viewCtrl);
        console.log(this.viewCtrl['parent']);
        console.log(this.navCtrl.getViews());
        //this.navCtrl.removeView( this.navCtrl.getViews()[0] );
        setTimeout(function () {
            /* this.navCtrl.insert(2, OtherPage);
            this.navCtrl.insert(3, OtherPage3); */
            //this.navCtrl.insertPages(2, [ {page:OtherPage}, {paged:OtherPage3} ]);
            console.log(_this.navCtrl);
        }, 2000);
        //this.navCtrl.pop();
        console.log(this.navCtrl.getViews());
    };
    OtherPage2.prototype.ionViewDidLeave = function () {
        console.log('leave2');
    };
    return OtherPage2;
}());
OtherPage2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'otherpage2',
        segment: "otherpage2/:id",
        defaultHistory: ['list'],
        priority: 'off'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-header>\n    <ion-navbar>\n        <ion-title>\n        OtherPage2\n        </ion-title>\n    </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n        OtherPage2\n        <button type=\"button\" ion-button block (click)=\"goBack()\">button</button>\n        <button type=\"button\" ion-button block navPop>button</button>\n    </ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], OtherPage2);

//# sourceMappingURL=other-page2.js.map

/***/ })

});
//# sourceMappingURL=1.js.map