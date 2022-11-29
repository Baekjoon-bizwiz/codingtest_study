const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = Number.parseInt(line.trim());

// const input = 5;
let answer = "";

for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);
