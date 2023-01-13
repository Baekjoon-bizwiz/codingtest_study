const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split("\n");

const result = input.map((e) => e % 42);
const duplicateNum = [...new Set(result)];
const answer = duplicateNum.length;

console.log(answer);
