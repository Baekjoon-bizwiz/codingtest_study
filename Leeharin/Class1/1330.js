const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
let result = '';

if (num1 > num2) result = '>';
else if (num1 < num2) result = '<';
else result = '==';

console.log(result);
