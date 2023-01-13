const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n').map(x=> Number(x));
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x=> Number(x));

let max = Math.max(...input)

console.log(max);
console.log(input.indexOf(max)+1);