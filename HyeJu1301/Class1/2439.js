const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let res = '';

for (let i = 1; i <= input; i++) {
    res += ' '.repeat(input-i) + '*'.repeat(i) + '\n'
}
console.log(res.slice(0, -1));