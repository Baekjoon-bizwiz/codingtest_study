const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split(" ");

let answer = 0;

if (input == false) {
  answer = 0;
} else {
  answer = Number.parseInt(input.length);
}

console.log(answer);
