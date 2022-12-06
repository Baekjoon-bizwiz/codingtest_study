const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = Number.parseInt(line.trim());

// const input = 5;

let star = [];
let space = [];
let answer = "";

for (let i = 1; i <= input; i++) {
  star.push("*".repeat(i));
}

for (let j = input - 1; j >= 0; j--) {
  space.push(" ".repeat(j));
}

for (let k = 0; k < input; k++) {
  answer += space[k] + star[k] + "\n";
}

console.log(answer);
