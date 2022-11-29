const fs = require('fs');
// let input = fs.readFileSync('../input.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// parseInt => 문자열을 정수로 반환
const a = parseInt(input[0])
const b = parseInt(input[1])

console.log(a+b);