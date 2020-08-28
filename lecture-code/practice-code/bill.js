const prompt = require('prompt-sync')();
let n = prompt('enter number: ');
let arr = [];
while(n!=0){
    arr.push(n);
    n = prompt('enter: ');
}
console.log(arr);