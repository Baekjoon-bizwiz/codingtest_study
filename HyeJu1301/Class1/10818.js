const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0]
let numbers = input[1].split(' ').map(x => Number(x));
let min = numbers[0]
let max = numbers[0]

for(let i = 0; i < num; i++){
    if(min > numbers[i]){
        min = numbers[i]
    }
    if(max < numbers[i]){
        max = numbers[i]
    }
}
console.log(min, max);