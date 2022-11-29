const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const arr = input.map((item) => parseInt(item) * parseInt(item));
const sum = arr.reduce((item, current) => item + current);

console.log(sum % 10);
