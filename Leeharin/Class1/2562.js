let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numArray = input.map(Number);
let max = numArray[0];

numArray.forEach((num, idx) => {
  if (max < numArray[idx]) {
    max = num;
  }
});

let maxIdx = numArray.indexOf(max);

console.log(max);
console.log(maxIdx + 1);
