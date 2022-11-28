const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = Number.parseInt(line.trim());

// const input = 5;
// 시간초과 주의하는 문제 - 여러번 출력하지 말고 한번에 출력하기!!

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
