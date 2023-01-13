const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split("\n");
// const input = `3
// 40 80 60`
//   .toString()
//   .trim()
//   .split("\n");

const N = input.shift();
const [grade] = input;

const splitGrade = grade.split(" ").map((e) => Number(e));
const highistGrade = splitGrade.reduce((acc, cur) => {
  cur > acc ? (acc = cur) : acc;
  return acc;
}, 0);
const newGrade = splitGrade.map((e) => (e / highistGrade) * 100);
const answer = newGrade.reduce((acc, cur) => acc + cur, 0) / N;

console.log(answer);
