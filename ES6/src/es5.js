'use strict';

var _boj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var boj = (_boj = {}, _defineProperty(_boj, Symbol('a'), 'hello'), _defineProperty(_boj, Symbol('b'), 'world'), _boj);

var objectSymbol = Object.getOwnPropertySymbol(boj);

console.log(objectSymbol);
