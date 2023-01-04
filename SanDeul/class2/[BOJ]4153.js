const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

// const input = `6 8 10
// 25 52 60
// 5 12 13
// 0 0 0`
//   .trim()
//   .split("\n")
//   .map((e) => e.split(" "));

const zero = input.pop();
const answer = [];

function isRightTriangle(input) {
  input.map((e) => e.sort((a, b) => a - b));
  for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i];
    a ** 2 + b ** 2 == c ** 2 ? answer.push("right") : answer.push("wrong");
  }
  return answer.join("\n");
}

console.log(isRightTriangle(input));

// 삽질 흔적...
// function isRightTriangle(input) {
//   const triangleForm1 = [3, 4, 5];
//   const triangleForm2 = [5, 12, 13];
//   const checkRight = (arr) =>
//     input.map((e) =>
//       e.sort((a, b) => a - b).every((cur, i) => cur % arr[i] === 0)
//     );
//   const checkResult1 = checkRight(triangleForm1);
//   const checkResult2 = checkRight(triangleForm2);
//   const result = checkResult1.map((e, i) =>
//     checkResult2[i] === true ? (e = true) : e
//   );
//   const answer = result.map((e) => (e === true ? "right" : "wrong")).join("\n");
//   return answer;
// }
