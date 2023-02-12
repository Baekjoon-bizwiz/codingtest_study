const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let res = '';

for (let i = input; i >= 1; i--) {
    res += i + '\n'
}
console.log(res);