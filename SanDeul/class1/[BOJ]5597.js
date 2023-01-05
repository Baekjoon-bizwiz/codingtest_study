const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line
  .trim()
  .split("\n")
  .map((e) => Number(e));

const result = [];
for (let i = 1; i <= 30; i++) {
  input.find((e) => e === i) ? "" : result.push(i);
}
const answer = result.join("\n");
console.log(answer);
