const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let arr = '';
for (let i = 1; i <= parseInt(input); i++) {
  arr += `${i} `;
}

console.log(arr);
