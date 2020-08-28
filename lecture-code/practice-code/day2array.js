let arr = [1,2,-1,3-2,5,6];
var myFilter = function(n){return n>=0;}
let filtered = arr.filter(myFilter);
console.log(filtered);
function myFilter(arr,filter_function){
    let temp_arr = [];
    let j = 0;
    for(let i = 0;i<arr.length;i++){
        if(filter_function(arr[i])){
            temp_arr[j]=arr[i];
            j++;
        }
    }
    return temp_arr;
}
function filterPositive(n){
    return n>=0;
}
console.log(myFilter(arr,filterPositive));
