function triangleArea(a,b,c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

function roofVolume(width,depth,sweep){
    let tringle_area = triangleArea(depth,sweep,sweep);
    let roof_volume = width * tringle_area;
    return roof_volume;
}

function livingVolume(width,depth,height){
    return (width * depth * height);

}
function houseVolume(width,depth,height,sweep){
    let living_vol = livingVolume(width,depth,height);
    let roof_vol = roofVolume(width,depth,sweep);
    let house_vol = living_vol + roof_vol;
    return house_vol;
}
const prompt = require('prompt-sync')();
let width = parseFloat(prompt('Enter the width: '));
let depth = parseFloat(prompt('Enter the depth: '));
let height = parseFloat(prompt('Enter the height: '));
let sweep = parseFloat(prompt('Enter the sweep: '));
let house_volume = houseVolume(width,depth,height,sweep);
console.log('The house volume is ',house_volume);