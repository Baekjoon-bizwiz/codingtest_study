const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().split('');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0])
const b = parseInt(input[1])

console.log(a*b);