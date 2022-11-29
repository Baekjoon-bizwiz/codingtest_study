const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a1 = parseInt(input[0] ** 2)
const a2 = parseInt(input[1] ** 2)
const a3 = parseInt(input[2] ** 2)
const a4 = parseInt(input[3] ** 2)
const a5 = parseInt(input[4] ** 2)

const res = (a1 + a2 + a3 + a4 + a5) % 10

console.log(res);