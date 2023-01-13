const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = Number(line.trim());

let answer = "";
for (let i = input; i > 0; i--) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);
