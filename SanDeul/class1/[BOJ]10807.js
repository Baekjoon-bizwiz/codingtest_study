const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split("\n");

// const input = `11
// 1 4 1 2 4 2 4 2 3 4 4
// 2`
//   .trim()
//   .split("\n");

const [N, numbers, v] = input;
const answer = numbers.split(" ").reduce((acc, cur) => {
  cur === v ? (acc += 1) : acc;
  return acc;
}, 0);
console.log(answer);
