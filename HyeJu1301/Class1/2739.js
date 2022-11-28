const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let str = ""

for (let i = 1; i <= 9; i++) {
    str = input * i
    console.log(input + " * " + i + " = " + str);
}
