const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0].split(' ').map(x => Number(x));
let a = input[1].split(' ').map(x => Number(x));
let res = []

for(let i = 0; i < num[0]; i++){
    if(a[i] < num[1]) {
        res.push(a[i])
    }
}

console.log(res.join(' '));