const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split("");

const [grade, sign] = input;
let answer = 0;

switch (grade) {
  case "A":
    answer += 4;
    break;
  case "B":
    answer += 3;
    break;
  case "C":
    answer += 2;
    break;
  case "D":
    answer += 1;
    break;
  case "F":
    answer = "0.0";
    break;
}

switch (sign) {
  case "+":
    answer = answer + ".3";
    break;
  case "0":
    answer = answer + ".0";
    break;
  case "-":
    answer = answer - 0.3 + "";
    break;
}

console.log(answer);
