const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line
  .trim()
  .split(" ")
  .map((e) => Number(e));
// const input = `-2 5`
//   .trim()
//   .split(" ")
//   .map((e) => Number(e));
const [a, b] = input;
const answer = Math.abs(a - b);
console.log(answer);
