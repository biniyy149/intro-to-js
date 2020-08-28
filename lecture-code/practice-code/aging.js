const prompt = require('prompt-sync')();
let age = prompt('please enter your age: ');
age = parseInt(age);
while(age<=18){
    console.log('your age: ', age);
    prompt('please enter your age: ');
    age++;

}
console.log('wrong age')