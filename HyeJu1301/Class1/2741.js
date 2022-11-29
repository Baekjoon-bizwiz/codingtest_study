const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let str = ''

for (let i = 1; i <= input; i++) {
    str += i + "\n"    
}

console.log(str);