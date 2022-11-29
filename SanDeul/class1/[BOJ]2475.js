const line = require("fs").readFileSync("/dev/stdin");
let input = line
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number.parseInt(e));

// let input = [0, 4, 2, 5, 6];
let square = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  square.push(input[i] * input[i]);
}

for (let j = 0; j < square.length; j++) {
  sum += square[j];
}

const result = sum % 10;

console.log(result);
