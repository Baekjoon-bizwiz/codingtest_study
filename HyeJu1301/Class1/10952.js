const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let res = []

for (let i = 0; i < input.length -1; i++) {
    res = input[i].split(' ');
    console.log(Number(res[0]) + Number(res[1]));
}