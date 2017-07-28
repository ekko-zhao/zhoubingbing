webpackJsonp([2],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/navigation/other-page2.module": [
		292,
		1
	],
	"../pages/navigation/other-page3.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageOne = (function () {
    function PageOne() {
    }
    return PageOne;
}());
PageOne = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      PageOne\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
    })
], PageOne);

//# sourceMappingURL=page-one.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageTwo = (function () {
    function PageTwo() {
    }
    return PageTwo;
}());
PageTwo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      PageTwo\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
    })
], PageTwo);

//# sourceMappingURL=page-two.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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


//import { OtherPage } from './other-page';
//import { OtherPage2 } from './other-page2';
var NavigationComponent = (function () {
    function NavigationComponent(navCtrl, viewCtrl, plt) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.plt = plt;
        this.items = [];
        this.items = [
            {
                'title': 'Angular',
                'icon': 'angular',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': '#E63135'
            },
            {
                'title': 'CSS34',
                'icon': 'css3',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            }
        ];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        console.log(this.plt.platforms());
    };
    NavigationComponent.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push('otherpage2', { item: item, id: '2323' });
        //this.navCtrl.push(OtherPage2, { item: item });
    };
    NavigationComponent.prototype.ionViewDidEnter = function () {
        /*  console.log(this.navCtrl)
         console.log(this.viewCtrl)
         console.log(this.viewCtrl['parent'])
         console.log(this.navCtrl.getViews())
 
         console.log(this.navCtrl)
         //this.navCtrl.insert(0, OtherPage) */
    };
    NavigationComponent.prototype.ionViewDidLeave = function () {
        console.log('leave0');
    };
    NavigationComponent.prototype.myHeaderFn = function () {
        console.log('myHeaderFn');
        return null;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/navigation/navigation.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Navigation</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>\n            <ion-icon [name]="\'logo-\' + item.icon" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n            {{ item.title }}\n        </button>\n    </ion-list>\n    <ion-list insert>\n        <ion-list reorder="true">\n\n            <ion-item>\n                <ion-note item-start >\n                    <p>Left Note</p>\n                </ion-note>\n                My Item\n                <ion-note item-end>\n                    Right Note\n                </ion-note>\n            </ion-item>\n        </ion-list>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/navigation/navigation.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
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


var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/nin-live.png',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/nin-live.png',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/nin-live.png',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        console.log(this.params);
        this.character = characters[this.params.get('charNum')];
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalContentPage;
}());
ModalContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"{{character.image}}\">\n        </ion-avatar>\n        <h2>{{character.name}}</h2>\n        <p>{{character.quote}}</p>\n      </ion-item>\n      <ion-item *ngFor=\"let item of character['items']\">\n        {{item.title}}\n        <ion-note item-end>\n          {{item.note}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], ModalContentPage);

//# sourceMappingURL=modal-content.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
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


var PopoverPage = (function () {
    function PopoverPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
        console.log(navParams);
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    };
    PopoverPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == background) {
                colorName = key;
            }
        }
        return colorName;
    };
    PopoverPage.prototype.setFontFamily = function () {
        if (this.textEle.style.fontFamily) {
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
        }
    };
    PopoverPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    PopoverPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    PopoverPage.prototype.changeFontFamily = function () {
        if (this.fontFamily)
            this.textEle.style.fontFamily = this.fontFamily;
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list radio-group [(ngModel)]=\"fontFamily\" (ionChange)=\"changeFontFamily()\" class=\"popover-page\">\n      <ion-row>\n        <ion-col>\n          <button (click)=\"changeFontSize('smaller')\" ion-item detail-none class=\"text-button text-smaller\">A</button>\n        </ion-col>\n        <ion-col>\n          <button (click)=\"changeFontSize('larger')\" ion-item detail-none class=\"text-button text-larger\">A</button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row-dots\">\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('white')\" class=\"dot-white\" [class.selected]=\"background == 'white'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('tan')\" class=\"dot-tan\" [class.selected]=\"background == 'tan'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('grey')\" class=\"dot-grey\" [class.selected]=\"background == 'grey'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('black')\" class=\"dot-black\" [class.selected]=\"background == 'black'\"></button>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"text-athelas\">\n        <ion-label>Athelas</ion-label>\n        <ion-radio value=\"Athelas\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-charter\">\n        <ion-label>Charter</ion-label>\n        <ion-radio value=\"Charter\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-iowan\">\n        <ion-label>Iowan</ion-label>\n        <ion-radio value=\"Iowan\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-palatino\">\n        <ion-label>Palatino</ion-label>\n        <ion-radio value=\"Palatino\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-san-francisco\">\n        <ion-label>San Francisco</ion-label>\n        <ion-radio value=\"San Francisco\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-seravek\">\n        <ion-label>Seravek</ion-label>\n        <ion-radio value=\"Seravek\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-times-new-roman\">\n        <ion-label>Times New Roman</ion-label>\n        <ion-radio value=\"Times New Roman\"></ion-radio>\n      </ion-item>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], PopoverPage);

//# sourceMappingURL=popover-page.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_action_sheet_action_sheet__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_badges_badges_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_buttons_buttons_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cards_cards_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkbox_checkbox_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_date_time_date_time_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fabs_fabs_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gestures_gestures_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_grid_grid_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_icons_icons_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_inputs_inputs_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lists_lists_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_loading_loading_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_menus_menus_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_menus_page_one__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_menus_page_two__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_modal_modal_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modal_modal_content__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_navigation_navigation_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_popover_popover_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_popover_popover_page__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_radio_radio_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_range_range_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_range_range_component2__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_range_range_component3__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_test_test_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























/* import { OtherPage } from '../pages/navigation/other-page';
import { OtherPage2 } from '../pages/navigation/other-page2';
import { OtherPage3 } from '../pages/navigation/other-page3'; */







var component = [
    __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
    __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
    __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_action_sheet_action_sheet__["a" /* ActionSheet */],
    __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert_component__["a" /* AlertComponent */],
    __WEBPACK_IMPORTED_MODULE_10__pages_badges_badges_component__["a" /* BadgesComponent */],
    __WEBPACK_IMPORTED_MODULE_11__pages_buttons_buttons_component__["a" /* ButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_12__pages_cards_cards_component__["a" /* CardsComponent */],
    __WEBPACK_IMPORTED_MODULE_13__pages_checkbox_checkbox_component__["a" /* CheckboxComponent */],
    __WEBPACK_IMPORTED_MODULE_14__pages_date_time_date_time_component__["a" /* DateTimeComponent */],
    __WEBPACK_IMPORTED_MODULE_15__pages_fabs_fabs_component__["a" /* FABsComponent */],
    __WEBPACK_IMPORTED_MODULE_16__pages_gestures_gestures_component__["a" /* GesturesComponent */],
    __WEBPACK_IMPORTED_MODULE_17__pages_grid_grid_component__["a" /* GridComponent */],
    __WEBPACK_IMPORTED_MODULE_18__pages_icons_icons_component__["a" /* IconsComponent */],
    __WEBPACK_IMPORTED_MODULE_19__pages_inputs_inputs_component__["a" /* InputsComponent */],
    __WEBPACK_IMPORTED_MODULE_20__pages_lists_lists_component__["a" /* ListsComponent */],
    __WEBPACK_IMPORTED_MODULE_21__pages_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_22__pages_menus_menus_component__["a" /* MenusComponent */],
    __WEBPACK_IMPORTED_MODULE_23__pages_menus_page_one__["a" /* PageOne */],
    __WEBPACK_IMPORTED_MODULE_24__pages_menus_page_two__["a" /* PageTwo */],
    __WEBPACK_IMPORTED_MODULE_25__pages_modal_modal_component__["a" /* ModalComponent */],
    __WEBPACK_IMPORTED_MODULE_26__pages_modal_modal_content__["a" /* ModalContentPage */],
    __WEBPACK_IMPORTED_MODULE_27__pages_navigation_navigation_component__["a" /* NavigationComponent */],
    /* OtherPage,
    OtherPage2,
    OtherPage3, */
    __WEBPACK_IMPORTED_MODULE_28__pages_popover_popover_component__["a" /* PopoverComponent */],
    __WEBPACK_IMPORTED_MODULE_29__pages_popover_popover_page__["a" /* PopoverPage */],
    __WEBPACK_IMPORTED_MODULE_30__pages_radio_radio_component__["a" /* RadioComponent */],
    __WEBPACK_IMPORTED_MODULE_31__pages_range_range_component__["a" /* RangeComponent */],
    __WEBPACK_IMPORTED_MODULE_32__pages_range_range_component2__["a" /* TabBasicContentPage2 */],
    __WEBPACK_IMPORTED_MODULE_33__pages_range_range_component3__["a" /* TabBasicContentPage3 */],
    __WEBPACK_IMPORTED_MODULE_34__pages_test_test_component__["a" /* TestComponent */]
];


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            component
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                preloadModules: true
            }, {
                links: [
                    { loadChildren: '../pages/navigation/other-page3.module#OtherPage3Module', name: 'list', segment: 'other-page3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/navigation/other-page2.module#OtherPage2Module', name: 'otherpage2', segment: 'otherpage2/:id', priority: 'off', defaultHistory: ['list'] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            component
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menus_page_one__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menus_page_two__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_navigation_navigation_component__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@IonicPage()
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, config) {
        //rootPage: any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_navigation_navigation_component__["a" /* NavigationComponent */];
        platform.ready().then(function (readySource) {
            console.log(readySource);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (p) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menus_page_one__["a" /* PageOne */];
    };
    MyApp.prototype.openPage2 = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_menus_page_two__["a" /* PageTwo */];
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('mycontent'),
    __metadata("design:type", Object)
], MyApp.prototype, "mycontent", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/app/app.html"*/'<ion-menu [content]="mycontent" type="reveal" side="left" swipeEnabled="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n            Home\n        </button>\n      <button ion-item (click)="openPage2(friendsPage)">\n            Friends\n        </button>\n      <button ion-item (click)="openMenu()">\n            Close Menu\n        </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav #mycontent [root]="rootPage" [rootParams]="{name:\'bingbing\'}" ></ion-nav>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheet; });
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


var ActionSheet = (function () {
    function ActionSheet(platform, actionsheetCtrl) {
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    ActionSheet.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            //subTitle: 'subTitle',
            cssClass: 'action-sheets-basic-page',
            // 用户点击背景是关闭 actionSheet
            //enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Delete',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    },
                    cssClass: '',
                    // destructive or cancel 提供特别的样式  cancel 单独在actionSheet 底部
                    role: 'destructive'
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return ActionSheet;
}());
ActionSheet = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/action-sheet/action-sheet.html"*/'<p> sction-sheet works here</p>\n<ion-header>\n    <ion-navbar>\n        <ion-title>Action Sheets</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n    <button ion-button block (click)="openMenu()">\n    Show Action Sheet\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/action-sheet/action-sheet.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ActionSheet);

//# sourceMappingURL=action-sheet.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
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


var AlertComponent = (function () {
    function AlertComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    // Alert options
    /*
        title	string	The title for the alert.
        subTitle	string	The subtitle for the alert.
        message	string	The message for the alert.
        cssClass	string	Additional classes for custom styles, separated by spaces.
        inputs	array	An array of inputs for the alert. See input options.
        buttons	array	An array of buttons for the alert. See buttons options.
        enableBackdropDismiss	boolean	Whether the alert should be dismissed by tapping the backdrop. Default true.
    */
    // Input options
    /*
        type	string	The type the input should be: text, tel, number, etc.
        name	string	The name for the input.
        placeholder	string	The input's placeholder (for textual/numeric inputs)
        value	string	The input's value.
        label	string	The input's label (only for radio/checkbox inputs)
        checked	boolean	Whether or not the input is checked.
        id	string	The input's id.
    */
    // Button options
    /*
        text	string	The buttons displayed text.
        handler	any	Emitted when the button is pressed.
        cssClass	string	An additional CSS class for the button.
        role	string	The buttons role, null or cancel.
    */
    AlertComponent.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AlertComponent.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Do you want to buy this book?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AlertComponent.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log(data);
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertComponent.prototype.showRadio = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        // alert.setMessage('message');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'red',
            value: 'red'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(data);
            }
        });
        alert.present();
    };
    AlertComponent.prototype.showCheckbox = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/alert/alert.component.html"*/'<p> Show Action Sheet works here ew</p>\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>alert</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding class="action-sheets-basic-page">\n    <button ion-button block (click)="presentAlert()">  Basic alert   </button>\n\n    <button ion-button color="primary" block (click)="presentConfirm()">Confirm Alert</button>\n\n    <button ion-button color="primary" block (click)="showPrompt()">Prompt Alert</button>\n\n    <button ion-button color="primary" block (click)="showRadio()">Radio Alert</button>\n\n    <button ion-button color="primary" block (click)="showCheckbox()">Checkbox Alert</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/alert/alert.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AlertComponent);

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgesComponent = (function () {
    function BadgesComponent() {
        this.items = [{}, {}];
    }
    /*
        <ion-badge item-end color="danger">260k</ion-badge>

        color="light"
        color="default"
        color="secondary"
        color="danger"
        color="dark"
    */
    BadgesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.items.push({});
            //this.items = [{},{},{}]
        }, 2000);
    };
    return BadgesComponent;
}());
BadgesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/badges/badges.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>badges</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item *ngFor="let item of items">\n        <ion-icon name="logo-twitter" item-start></ion-icon>\n        Followers\n        <ion-badge item-end color="danger">260k</ion-badge>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/badges/badges.component.html"*/
    })
], BadgesComponent);

//# sourceMappingURL=badges.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/buttons/buttons.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only>\n        <ion-icon name="contact"></ion-icon> </button>\n        </ion-buttons>\n\n        <ion-title>buttons</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon> </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <p>Default Style</p>\n    <button ion-button color="light">Light</button>\n    <button ion-button>Default</button>\n    <button ion-button color="secondary">Secondary</button>\n    <button ion-button color="danger">Danger</button>\n    <button ion-button color="dark">Dark</button>\n\n    <p>Outline Style</p>\n    <button ion-button color="light" outline>Light Outline</button>\n\n\n    <p>Clear Style</p>\n    <button ion-button color="secondary" clear>Secondary Clear</button>\n\n    <p>Round Style</p>\n    <button ion-button color="secondary" round>Secondary Round</button>\n\n    <p>Block Style</p>\n    <button ion-button color="secondary" block>Secondary block</button>\n\n    <p>Full Style</p>\n    <button ion-button full>Full Button</button>\n\n    <p>Button Sizes</p>\n    <button ion-button small>Small</button>\n    <button ion-button>Default</button>\n    <button ion-button large>Large</button>\n\n    <p>Icon Buttons</p>\n    <button ion-button icon-left>\n        <ion-icon name="home"></ion-icon>  Left Icon\n    </button>\n    <button ion-button icon-right>\n        <ion-icon name="home"></ion-icon>  Right Icon\n    </button>\n    <button ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n    </button>\n\n    <p>Buttons In Components</p>\n    <ion-list>\n        <ion-item>\n            Left Icon Button\n            <button ion-button outline item-end icon-left>\n                <ion-icon name="star"></ion-icon>\n                Left Icon\n            </button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/buttons/buttons.component.html"*/
    })
], ButtonsComponent);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardsComponent = (function () {
    function CardsComponent() {
    }
    return CardsComponent;
}());
CardsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/cards/cards.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>cards</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <p>Basic Usage</p>\n    <ion-card>\n        <ion-card-header>\n            Header\n        </ion-card-header>\n        <ion-card-content>\n            The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n        </ion-card-content>\n    </ion-card>\n\n    <p>Lists In Cards</p>\n    <ion-card>\n        <ion-card-header>\n            Explore Nearby\n        </ion-card-header>\n\n        <ion-list>\n            <button ion-item>\n      <ion-icon name="cart" item-start></ion-icon>\n      Shopping\n    </button>\n\n            <button ion-item>\n      <ion-icon name="medical" item-start></ion-icon>\n      Hospital\n    </button>\n        </ion-list>\n    </ion-card>\n\n    <p>Images In Cards</p>\n    <ion-card>\n        <img src="./assets/img/nin-live.png" />\n        <ion-card-content>\n            <ion-card-title>\n                Nine Inch Nails Live\n            </ion-card-title>\n            <p>\n                The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n            </p>\n        </ion-card-content>\n    </ion-card>\n\n    <p>Background Images</p>\n    <div class="card-background-page">\n        <ion-card>\n            <img src="./assets/img/nin-live.png" />\n            <div class="card-title">São Paulo</div>\n            <div class="card-subtitle">41 Listings</div>\n        </ion-card>\n    </div>\n\n    <p>Advanced Cards</p>\n    <p>Advanced Cards - Social</p>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="./assets/img/nin-live.png" />\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>November 5, 1955</p>\n        </ion-item>\n\n        <img src="./assets/img/nin-live.png" />\n\n        <ion-card-content>\n            <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n                Whoa. This is heavy.</p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>4 Comme</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>4 Comms</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <ion-note>11h ago</ion-note>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <p>Advanced Cards - Map</p>\n    <ion-card style="position:relative">\n\n        <img src="./assets/img/nin-live.png" />\n        <ion-fab right top>\n            <button ion-fab>\n      <ion-icon name="pin"></ion-icon>\n    </button>\n        </ion-fab>\n\n        <ion-item>\n            <ion-icon name="football" item-start large></ion-icon>\n            <h2>Museum of Football</h2>\n            <p>11 N. Way St, Madison, WI 53703</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="wine" item-left large></ion-icon>\n            <h2>Institute of Fine Cocktails</h2>\n            <p>14 S. Hop Avenue, Madison, WI 53703</p>\n        </ion-item>\n\n        <ion-item>\n            <span item-left>18 min</span>\n            <span item-left>(2.6 mi)</span>\n            <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      Start\n    </button>\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/cards/cards.component.html"*/
    })
], CardsComponent);

//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.checkbox = true;
        var t = this;
        setTimeout(function () {
            console.log(t.checkbox);
        }, 2000);
    }
    return CheckboxComponent;
}());
CheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/checkbox/checkbox.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>cards</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <p>Basic Usage</p>\n    <ion-list>\n        <ion-list-header>\n            Characters\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>Jon Snow</ion-label>\n            <ion-checkbox [(ngModel)]="checkbox" value="zhoubingbings"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Daenerys Targaryen</ion-label>\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Arya Stark</ion-label>\n            <ion-checkbox value="cherry" disabled="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Tyrion Lannister</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Sansa Stark</ion-label>\n            <ion-checkbox color="danger" checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Khal Drogo</ion-label>\n            <ion-checkbox></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Cersei Lannister</ion-label>\n            <ion-checkbox color="energized" checked="true" color="dark"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Stannis Baratheon</ion-label>\n            <ion-checkbox color="royal" checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Petyr Baelish</ion-label>\n            <ion-checkbox disabled="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Hodor</ion-label>\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Catelyn Stark</ion-label>\n            <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Bronn</ion-label>\n            <ion-checkbox color="royal"></ion-checkbox>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/checkbox/checkbox.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], CheckboxComponent);

//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateTimeComponent = (function () {
    function DateTimeComponent() {
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    return DateTimeComponent;
}());
DateTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/date-time/date-time.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>DateTime</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder="Title"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input placeholder="Location"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label>Start Time</ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Ends</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n        </ion-item>\n\n        <button ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-note item-end>Never</ion-note>\n    </button>\n\n        <button ion-item>\n      <ion-label>Travel Time</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n    </ion-list>\n\n    <ion-list>\n        <button ion-item>\n      <ion-label>Alert</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/date-time/date-time.component.html"*/
    })
], DateTimeComponent);

//# sourceMappingURL=date-time.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FABsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FABsComponent = (function () {
    function FABsComponent() {
    }
    return FABsComponent;
}());
FABsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/fabs/fabs.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>FABs</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-fab top right edge>\n        <button ion-fab color="vibrant" mini><ion-icon name="add"></ion-icon></button>\n        <ion-fab-list>\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-sdfsd"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab left top>\n        <button ion-fab color="secondary"><ion-icon name="arrow-dropright"></ion-icon></button>\n        <ion-fab-list side="right">\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab right bottom>\n        <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n        <ion-fab-list side="left">\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n\n\n    <ion-fab left bottom>\n        <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab center middle>\n        <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="bottom">\n            <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n            <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="right">\n            <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab right middle>\n        <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/fabs/fabs.component.html"*/
    })
], FABsComponent);

//# sourceMappingURL=fabs.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GesturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GesturesComponent = (function () {
    function GesturesComponent() {
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
    }
    GesturesComponent.prototype.pressEvent = function (e) {
        this.press++;
    };
    GesturesComponent.prototype.panEvent = function (e) {
        this.pan++;
    };
    GesturesComponent.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    GesturesComponent.prototype.tapEvent = function (e) {
        this.tap++;
    };
    return GesturesComponent;
}());
GesturesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/gestures/gestures.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>手势</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card (tap)="tapEvent($event)">\n        <ion-item>\n            Tapped: {{tap}} times\n        </ion-item>\n    </ion-card>\n\n    <ion-card (press)="pressEvent($event)">\n        <ion-item>\n            Pressed: {{press}} times\n        </ion-item>\n    </ion-card>\n\n    <ion-card (pan)="panEvent($event)">\n        <ion-item>\n            Panned: {{pan}} times\n        </ion-item>\n    </ion-card>\n\n    <ion-card (swipe)="swipeEvent($event)">\n        <ion-item>\n            Swiped: {{swipe}} times\n        </ion-item>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/gestures/gestures.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], GesturesComponent);

//# sourceMappingURL=gestures.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
    }
    GridComponent.prototype.pressEvent = function (e) {
        this.press++;
    };
    GridComponent.prototype.panEvent = function (e) {
        this.pan++;
    };
    GridComponent.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    GridComponent.prototype.tapEvent = function (e) {
        this.tap++;
    };
    return GridComponent;
}());
GridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/grid/grid.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>手势</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="grid-basic-page">\n    <p padding>\n        Equal-width columns\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Setting one column width\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-6>\n                <div>2 of 3 (wider)</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>\n                <div>1 of 3 (wider)</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Variable-width columns\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-auto>\n                <div>Variable width content</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col col-auto>\n                <div>\n                    <ion-icon name="globe"></ion-icon>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Offsetting columns\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col offset-4>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col offset-4>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Push and pull\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-9 push-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3 pull-9>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6 push-3>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-3 push-3>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col col-3 pull-9>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Setting all column widths<br>\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-4>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col col-5>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Vertical alignment\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4 <br>#</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4 <br>#<br>#</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-start>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-end>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col align-self-start>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col align-self-center>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col align-self-end>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Horizontal Alignment\n    </p>\n    <ion-grid>\n        <ion-row justify-content-start>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-center>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-end>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-around>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-between>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/grid/grid.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], GridComponent);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/icons/icons.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>icon</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-center class="icons-basic-page">\n    <ion-row>\n        <ion-col>\n            <ion-icon name="ionic" color="primary"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="ionic" color="primary"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="logo-angular"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="heart" color="danger"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="ionitron" color="primary"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="happy" color="vibrant"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="people"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="person"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="contact"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="apps"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="lock"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="key" color="bright"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="unlock"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="map" color="secondary"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="navigate"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="locate"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="mic"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="musical-notes" color="vibrant"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="volume-up"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="microphone"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="cafe" color="bright"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="calculator"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="bus"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="wine" color="danger"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="camera"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="image" color="secondary"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="star" color="bright"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="pin"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="arrow-dropup-circle" color="vibrant"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="arrow-back"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="arrow-dropdown"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n\n        <ion-col>\n            <ion-icon name="cloud"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="sunny" color="bright"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="umbrella"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="rainy" color="primary"></ion-icon>\n        </ion-col>\n    </ion-row>\n    <div style="height:1000px;"></div>\n    <ion-avatar>\n        <ion-img width="200" height="260" src="./assets/img/nin-live.png"></ion-img>\n    </ion-avatar>\n    <div style="height:1000px;"></div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/icons/icons.component.html"*/
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputsComponent = (function () {
    function InputsComponent() {
    }
    return InputsComponent;
}());
InputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/inputs/inputs.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Fixed Labels</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <p>Fixed Inline Labels</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/inputs/inputs.component.html"*/
    })
], InputsComponent);

//# sourceMappingURL=inputs.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListsComponent = (function () {
    function ListsComponent() {
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man'
        ];
    }
    ListsComponent.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/lists/lists.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Lists</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <p>Basic Usage</p>\n    <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n    </ion-list>\n\n    <p>no-lines</p>\n    <ion-list no-lines>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n    </ion-list>\n\n    <p>Inset List</p>\n    <ion-list inset>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n    </ion-list>\n\n    <p>List Dividers</p>\n    <ion-item-group>\n        <ion-item-divider color="light">A</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item>Argentina</ion-item>\n        <ion-item>Armenia</ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n        <ion-item-divider color="light">B</ion-item-divider>\n        <ion-item>Bangladesh</ion-item>\n        <ion-item>Belarus</ion-item>\n        <ion-item>Belgium</ion-item>\n        <ion-item>Bhutan</ion-item>\n    </ion-item-group>\n\n    <p>List Headers</p>\n    <ion-list>\n        <ion-list-header>\n            Action\n        </ion-list-header>\n        <ion-item>Terminator II</ion-item>\n        <ion-item>The Empire Strikes Back</ion-item>\n        <ion-item>Blade Runner</ion-item>\n    </ion-list>\n\n    <p>Icon List</p>\n    <ion-list no-border>\n\n        <ion-list-header>\n            Classes\n        </ion-list-header>\n\n        <ion-item>\n            <ion-icon name=\'planet\' item-start></ion-icon>\n            Astronomy\n            <ion-note item-end>\n                To the moon\n            </ion-note>\n        </ion-item>\n\n        <ion-item>\n            <ion-toggle checked="false"></ion-toggle>\n            <ion-label>\n                Muggle Studies\n            </ion-label>\n            <ion-icon name=\'body\' item-start></ion-icon>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\'leaf\' item-start></ion-icon>\n            Herbology\n            <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name=\'flask\' item-start></ion-icon>\n            Potions\n            <ion-note item-end>\n                Poisonous\n            </ion-note>\n        </ion-item>\n    </ion-list>\n\n    <p>Avatar List</p>\n    <ion-list>\n        <ion-list-header>Today</ion-list-header>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="./assets/img/nin-live.png">\n            </ion-avatar>\n            <h2>Woody</h2>\n            <p>This town ain\'t big enough for the two of us!</p>\n            <ion-note item-end>3:43 pm</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="./assets/img/nin-live.png">\n            </ion-avatar>\n            <h2>Woody</h2>\n            <p>This town ain\'t big enough for the two of us!</p>\n            <ion-note item-end>3:43 pm</ion-note>\n        </ion-item>\n    </ion-list>\n    <p>Multi-line List</p>\n    <ion-list>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="./assets/img/nin-live.png">\n            </ion-avatar>\n            <h2>Finn</h2>\n            <h3>Don\'t Know What To Do!</h3>\n            <p>I\'ve had a pretty messed up day. If we just...</p>\n        </ion-item>\n    </ion-list>\n\n    <p>Sliding List</p>\n    <ion-list>\n        <ion-list-header>\n            Busters\n        </ion-list-header>\n        <ion-item-sliding>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="./assets/img/nin-live.png">\n                </ion-avatar>\n                <h2>Venkman</h2>\n                <p>Back off man, I\'m a scientist.</p>\n            </ion-item>\n            <ion-item-options>\n                <button ion-button color="light" icon-start>\n                    <ion-icon name="ios-more"></ion-icon>\n                    More\n                    </button>\n                <button ion-button color="primary" icon-start>\n                    <ion-icon name="text"></ion-icon>\n                    Text\n                    </button>\n                <button ion-button color="secondary" icon-start>\n                    <ion-icon name="call"></ion-icon>\n                    Call\n                    </button>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <p>Thumbnail List</p>\n    <ion-list>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="./assets/img/nin-live.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/lists/lists.component.html"*/
    })
], ListsComponent);

//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
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


var LoadingComponent = (function () {
    function LoadingComponent(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingComponent.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/loading/loading.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>loading</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <button ion-button block (click)="presentLoading()">Show Loading</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/loading/loading.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusComponent; });
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


var MenusComponent = (function () {
    function MenusComponent(app, menu) {
        menu.enable(true);
    }
    return MenusComponent;
}());
MenusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/menus/menus.component.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n        <ion-title>\n            Menus\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <button ion-button block menuToggle>Toggle Menu</button>\n    <p>Input Properties:</p>\n    <p> content= any 对菜单应使用的内容元素的引用。</p>\n    <p> id= string An id for the menu.</p>\n    <p> side="left | right" default left"</p>\n    <p> swipeEnabled=boolean If true, swiping the menu is enabled. Default true.</p>\n    <p> persistent=boolean If true, the menu will persist on child pages.</p>\n    <p> type="overlay | reveal | push"</p>\n\n    <p>Output Events:</p>\n    <p>ionClose ionDrag ionOpen</p>\n\n    <p> reveal is the default type for iOS mode.</p>\n    <p> The default type for both Material Design and Windows mode is overlay </p>\n    <p> The menu type can be changed in the app\'s config via the menuType property, or passed in the type property on the</p>\n\n    <pre>\nimports: [\n    IonicModule.forRoot(MyApp,{{\'{\'}}\n        menuType: \'push\',\n        platforms: {{\'{\'}}\n            ios: {{\'{\'}}\n                menuType: \'overlay\',\n            {{\'}\'}}\n        {{\'}\'}}\n    {{\'}\'}})\n]\n    </pre>\n\n    <p> 添加 menuClose menuToggle 指令 控制侧菜单的显示</p>\n    <pre>\nimport {{\'{\'}} MenuController {{\'}\'}} from \'ionic-angular\';\nconstructor(public menuCtrl: MenuController) {{\'{\'}} {{\'}\'}}\nopenMenu() {{\'{\'}}\n    this.menuCtrl.open();\n{{\'}\'}}\ncloseMenu() {{\'{\'}}\n   this.menuCtrl.close();\n{{\'}\'}}\n\n toggleMenu() {{\'{\'}}\n   this.menuCtrl.toggle();\n{{\'}\'}}\n    </pre>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/menus/menus.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
], MenusComponent);

//# sourceMappingURL=menus.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_content__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = (function () {
    function ModalComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModalComponent.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_content__["a" /* ModalContentPage */], characterNum, {
            showBackdrop: false,
            enableBackdropDismiss: false,
            cssClass: ''
        });
        modal.present();
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/modal/modal.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Modals</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-list-header>Hobbits</ion-list-header>\n\n        <a ion-item (click)="openModal({charNum: 0})">\n      Gollum\n    </a>\n        <a ion-item (click)="openModal({charNum: 1})">\n      Frodo Baggins\n    </a>\n        <a ion-item (click)="openModal({charNum: 2})">\n      Sam\n    </a>\n    </ion-list>\n<pre>\n    create(component, data, opts)\n\n    openModal(characterNum)\n        let modal = this.modalCtrl.create(ModalContentPage, characterNum,\n                {{\'{\'}}showBackdrop: false,\n                enableBackdropDismiss: false,\n                cssClass: \'\'{{\'}\'}}\n        );\n        modal.present();\n\n</pre>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/modal/modal.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverComponent = (function () {
    function PopoverComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverComponent.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_page__["a" /* PopoverPage */], {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev // ev 用于指定 popover 位置
        });
    };
    return PopoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PopoverComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PopoverComponent.prototype, "text", void 0);
PopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/popover/popover.component.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Popovers</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #popoverContent padding class="popover-page">\n  <div #popoverText class="text-to-change">\n    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n    <div>Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem. Sed vitae lorem vehicula, auctor orci ultrices, finibus mauris. Donec vitae pulvinar diam. Nulla luctus congue quam, sed lacinia arcu dictum a.</div>\n\n    <div>Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est. In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n\n    <div>Sed pellentesque ipsum eget ante hendrerit maximus. Aliquam id venenatis nulla. Nullam in nibh at enim vestibulum ullamcorper. Nam felis dolor, lobortis vel est non, condimentum malesuada nisl. In metus sapien, malesuada at nulla in, pretium aliquam turpis. Quisque elementum purus mi, sed tristique turpis ultricies in. Donec feugiat dolor non ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut purus et diam porta cursus vitae semper mi. Donec fringilla tellus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae commodo sem. Duis vehicula quam sit amet imperdiet facilisis. Pellentesque eget dignissim neque, et scelerisque libero. Maecenas molestie metus sed orci cursus, in venenatis justo dapibus.</div>\n\n    <div>Aenean rhoncus urna at interdum blandit. Donec ac massa nec libero vehicula tincidunt. Sed sit amet hendrerit risus. Aliquam vitae vestibulum ipsum, non feugiat orci. Vivamus eu rutrum elit. Nulla dapibus tortor non dignissim pretium. Nulla in luctus turpis. Etiam non mattis tortor, at aliquet ex. Nunc ut ante varius, auctor dui vel, volutpat elit. Nunc laoreet augue sit amet ultrices porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum pellentesque lobortis est, ut tincidunt ligula mollis sit amet. In porta risus arcu, quis pellentesque dolor mattis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/popover/popover.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
], PopoverComponent);

//# sourceMappingURL=popover.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioComponent = (function () {
    function RadioComponent() {
        /* this.langForm = new FormGroup({
            "langs": new FormControl({ value: 'rust', disabled: false })
        }); */
    }
    RadioComponent.prototype.doSubmit = function (event) {
        //console.log('Submitting form', this.langForm.value);
        console.log(this.relationship);
        event.preventDefault();
    };
    return RadioComponent;
}());
RadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/radio/radio.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Radio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n     <form (submit)="doSubmit($event)" [formGroup]="langForm">\n         <ion-list radio-group formControlName="langs">\n            <ion-list-header>\n                Language\n            </ion-list-header>\n\n            <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio value="golang"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Python</ion-label>\n                <ion-radio value="python" disabled></ion-radio>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button>submit</button>\n    </form>\n</ion-content>\n<!-- 两种方式构建表单 -->\n<!-- <ion-content padding>\n        <form (submit)="doSubmit($event)">\n\n        <ion-list radio-group [(ngModel)]="relationship" name="sadfasf">\n            <ion-item>\n                <ion-label>Friends</ion-label>\n                <ion-radio value="friends" checked></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Family</ion-label>\n                <ion-radio value="family"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Enemies</ion-label>\n                <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button>submit</button>\n    </form>\n</ion-content> -->\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/radio/radio.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], RadioComponent);

//# sourceMappingURL=radio.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangeComponent = (function () {
    function RangeComponent() {
    }
    return RangeComponent;
}());
RangeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/range/range.component.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    <ion-title>Dark</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/range/range.component.html"*/
    })
], RangeComponent);

//# sourceMappingURL=range.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabBasicContentPage2; });
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


var TabBasicContentPage2 = (function () {
    function TabBasicContentPage2(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    return TabBasicContentPage2;
}());
TabBasicContentPage2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs2</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n        2\n    </ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], TabBasicContentPage2);

//# sourceMappingURL=range.component2.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabBasicContentPage3; });
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


var TabBasicContentPage3 = (function () {
    function TabBasicContentPage3(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    return TabBasicContentPage3;
}());
TabBasicContentPage3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs3</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n        3\n    </ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], TabBasicContentPage3);

//# sourceMappingURL=range.component3.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lakala/personer/git/nicapp/src/pages/test/test.component.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>test</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding-top>\n    <button ion-button type="button" >button</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lakala/personer/git/nicapp/src/pages/test/test.component.html"*/,
    })
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map