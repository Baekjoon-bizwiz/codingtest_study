const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

const calcResult = [
  `${num1 + num2}`,
  `${num1 - num2}`,
  `${num1 * num2}`,
  `${parseInt(num1 / num2)}`,
  `${num1 % num2}`,
];

calcResult.forEach((item) => {
  console.log(item);
});
