const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(parseFloat(input[0]) / parseFloat(input[1]));
