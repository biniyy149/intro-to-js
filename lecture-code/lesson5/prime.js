function checkPrime(par) {
    let isPrime = true;
    for(let i = 2; i<par; i++){
        if(par % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
    
}
const prompt = require('prompt-sync')();
let message = 'Enter a number: ';
let num = parseInt(prompt(message));
console.log(checkPrime(num));