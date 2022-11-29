const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const years = parseInt(input);

let result =
  (years % 4 === 0 && years % 100 !== 0) || years % 400 === 0 ? 1 : 0;

console.log(result);
