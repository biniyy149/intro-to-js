const arr1 = [1,2,3,4,5,6,7,8,9,10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const arr_sum = arr1.reduce(reducer);
console.log(arr_sum);
let sum = 0;
for(let i = 0; i< arr1.length; i++){
    sum += arr1[i];
    //console.log(sum);
}
console.log(sum);
const arr2 = [1,2,3,4];
arr2.forEach(e=>console.log(e));
