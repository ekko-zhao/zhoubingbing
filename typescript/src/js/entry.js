//import * as c from'./hello.ts';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Person = (function () {
    function Person(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    ;
    Person.prototype.methods = function () {
    };
    Person = __decorate([
        Component({
            seletor: 'person',
            template: 'person.html'
        })
    ], Person);
    return Person;
}());
function Component(component) {
    return function (target) {
        return componentClass(target, component);
    };
}
function componentClass(target, component) {
    var origin = target;
    //console.log(constructor);
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('seletor: ' + component.seletor);
        console.log('template: ' + component.template);
        console.log("person: " + origin.name + "(" + JSON.stringify(args) + ")");
        return construct(origin, args);
        //return new target;
    };
    f.prototype = origin.prototype;
    return f;
}
var p = new Person('angular', 'JS');
console.log(p);
