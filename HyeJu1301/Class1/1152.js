const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.split(' ').filter(e => e).length);