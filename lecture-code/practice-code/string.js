'use strict';
const prompt = require('prompt-sync')();
let str = prompt('enter: ');
let input = str.toUpperCase();
while(input !== 'STOP'){
    str = prompt('enter ')
    input = str.toUpperCase();
    console.log(str);
}
let phrase = prompt('enter: ');
let words = phrase.split(',');
words.reverse();
console.log(words);
let reversedstring = words.join('-');
console.log(reversedstring);
let inp = prompt('enter');
let updatedInput = inp.replace(/for/g, '4');
console.log(updatedInput);



