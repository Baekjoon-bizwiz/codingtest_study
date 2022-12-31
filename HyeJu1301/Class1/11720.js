const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0]
let a = input[1].split('')
let res = 0

for(let i = 0; i < num; i++) {
    res += Number(a[i])
}

console.log(res);