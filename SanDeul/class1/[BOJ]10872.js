const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = Number(line.trim());

let answer = 1;
for (let i = 1; i < input + 1; i++) {
  answer = answer * i;
}
console.log(answer);
