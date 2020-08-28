function farhToCels(farh) {
    let cels = (farh-32)*5/9;
    return cels;
}

const prompt = require('prompt-sync')();
let message = 'Enter the temperature in fahrneit: ';
let num = parseFloat(prompt(message));
console.log(farhToCels(num));