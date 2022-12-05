const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split(" ");

// const input = [10, 10];
// const input2 = [0, 30];
// const input3 = [23, 40];

let a = input[0];
let b = input[1];

if (input[1] - 45 === 0) {
  b = 0;
} else if (input[1] - 45 > 0) {
  b = input[1] - 45;
} else {
  b = input[1] - 45 + 60;
  a = a - 1;
  if (a < 0) {
    a = 23;
  }
}

const answer = [a, b].join(" ");
console.log(answer);
