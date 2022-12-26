const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split("\n");

// const input = `5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000`
//   .toString()
//   .trim()
//   .split("\n");

const testCase = input.shift();
const answer = input
  .map((e) =>
    e
      .split(" ")
      .reduce((acc, cur) => Number.parseInt(acc) + Number.parseInt(cur), 0)
  )
  .join("\n");
console.log(answer);

// 화살표 함수 내에 {} 중괄호를 친다 = return 문을 따로 써 줘야 한다!!
// (중괄호 없음 = return이 기존으로 들어 있다 침)

// reduce() 연습하기
