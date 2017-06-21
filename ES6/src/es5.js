'use strict';

var text = "xcmom and dad and baby";
var pattern = /mom( and dad( and babys)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]); // "mom and dad and baby"
console.log(matches[1]); // " and dad and baby"
console.log(matches[2]); 