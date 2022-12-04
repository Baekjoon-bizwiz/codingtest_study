const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const X = input[0].split(' ')[1];
const numArray = input[1].split(' ');

const result = numArray.filter((num) => parseInt(num) < parseInt(X));

console.log(result.map((num) => num).join(' '));
