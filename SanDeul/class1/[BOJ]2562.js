const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split("\n");

// const input = [3, 29, 38, 12, 57, 74, 40, 85, 61];

const maxValue = input.slice().sort((a, b) => {
  return b - a;
})[0];
const index = input.findIndex((e) => e === maxValue) + 1;

const answer = `${maxValue}
${index}`;

console.log(answer);
