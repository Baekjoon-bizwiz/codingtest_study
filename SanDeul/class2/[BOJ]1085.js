const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line
  .trim()
  .split(" ")
  .map((e) => Number(e));

// const input = "653 375 1000 1000"
//   .trim()
//   .split(" ")
//   .map((e) => Number(e));
// console.log(input);

// 왼 꼭짓점에 가까우면 x, y로 이동해야 함
// 오른 꼭짓점에 가까우면 w, h로 이동해야 함

// 가까우냐를 어떻게..? => 서로 빼서 비교? / 빼서 음수냐 양수냐?
// 결론 : wx , hy , x , y 중에 제일 작은 것 찾기

const escapeSquare = (input) => {
  const [x, y, w, h] = input;
  const wx = w - x;
  const hy = h - y;
  return Math.min(x, y, wx, hy);
};

console.log(escapeSquare(input));
