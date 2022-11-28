const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = Number.parseInt(line.trim());

// 교훈 : JS에선 부등호를 연속해서 쓸 수 없다...
// && 연산자 적극 활용하기!
let score = "";

if (90 <= input && input <= 100) {
  score = "A";
} else if (80 <= input && input <= 89) {
  score = "B";
} else if (70 <= input && input <= 79) {
  score = "C";
} else if (60 <= input && input <= 69) {
  score = "D";
} else {
  score = "F";
}

console.log(score);
