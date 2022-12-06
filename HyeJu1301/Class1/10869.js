const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// parseInt => 문자열을 정수로 반환
const a = parseInt(input[0])
const b = parseInt(input[1])

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);