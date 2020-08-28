const arr = [1,4,2,3,7,8,8,9,12,3];
const odd_arr = arr.filter(n=> n%2 !== 0);
console.log(odd_arr);
function filtered(arr){
    let temp = [];
    let j = 0;
    for(let i = 0; i <arr.length; i++){
        let n = arr[i];
        if(n%2 !==0){
            temp[j] = n;
            j=j+1;
        }
    }
}
const arr1 = [1,2,-1,3,-2,5,6]
const negarr = arr1.filter(n=> n >= 0);
console.log(negarr);