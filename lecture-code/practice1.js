const scores = [10,20,30,40,50]
function findAverage(arr) {
    let average = 0;
    sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        average = sum/arr.length;
    }
    return average;
    
}
let average = findAverage(scores);
console.log(average);
const array2 = [];
for (let i=0; i<10; i++){
array2[i] = Math.ceil(Math.random()*10);
}
let average2 = findAverage(array2);
console.log(average2);
const num_array = [1,11,3,14,6,23,9,5];
const default_sorted_array = num_array.sort();
console.log(default_sorted_array); // [ 1, 11, 14, 23, 3, 5, 6, 9 ]
const properly_sorted_array = num_array.sort((a,b) => a-b);
console.log(properly_sorted_array);
//function numberComparator(a,b){
//return a-b;
//const arr1 = [1,5,7,9];
//function doubleEveryElement(arr){
//const temp_arr = [];
//for(let i =0; i<arr.length; i++){
//temp_arr[i] = arr[i]*2;
///}
//return temp_arr;
//}
//const doubled_arr = doubleEveryElement(arr1);
//console.log(doubled_arr);
//const arr1 = [1,5,7,9];
//doubled_arr = arr1.map(n => n*2);
//console.log(doubled_arr);
const box = ["apple", "ball", "cat"];
function mapTo(arr){
    temp array = []
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
        temp array
    }
}
console.log(box);
mapTo(box);
console.log(box);
