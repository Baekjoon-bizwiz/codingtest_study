const line = require("fs").readFileSync("/dev/stdin", "utf8");
// const input = line.trim().split("\n");

// 테스트케이스 다 맞게 출력되는 데 자꾸 시간초과가 뜹니다... 왜..?!
const input = `2
6 12 10
30 50 72`
  .trim()
  .split("\n");

const [testCase, ...HWN] = input;
const data = HWN.map((e) => e.split(" ").map((e) => Number(e)));
let YY = 0;
let XX = 0;
let countX = 0;
const result = data
  .map((e) => {
    let [H, W, N] = e;
    do {
      countX += 1;
      N -= H;
    } while (N < 0);
    YY = e[2] - e[0] * countX;
    XX = countX + 1;
    return [YY, XX];
  })
  .map((e) => {
    const resultString = e.map((num) => num + "");
    resultString[1].length < 2
      ? (resultString[1] = "0" + resultString[1])
      : resultString[1];
    return resultString[0] + resultString[1];
  })
  .join("\n");

console.log(result);

// 시간 초과된 다른 버전(비슷함...)
// const line = require("fs").readFileSync("/dev/stdin", "utf8");
// // const input = line.trim().split("\n");

// const input = `2
// 6 12 10
// 30 50 72`
//   .trim()
//   .split("\n");

// const [testCase, ...HWN] = input;
// const data = HWN.map((e) => e.split(" ").map((e) => Number(e)));
// let YY = 0;
// let XX = 0;
// let countX = 0;

// const checkRoomNumber = (data) => {
//   const result = data.map((e) => {
//     let [H, W, N] = e;
//     do {
//       countX += 1;
//       N -= H;
//     } while (N < 0);

//     // 아래 (YY = e[2] - e[0] * countX;) 식은 YY = N - H * countX; 랑 결과가 달랐다.
//     // (N, H는 do...While문의 연산이 반영된 결과가 도출 됨) - 원하는 값 아니었음.
//     // 구조분해할당은 원본 배열에서 값을 복사해서 새롭게 할당하는 듯?

//     YY = e[2] - e[0] * countX;
//     XX = countX + 1;
//     return [YY, XX];
//   });
//   const answer = result
//     .map((e) => {
//       const resultString = e.map((num) => num + "");
//       resultString[1].length < 2
//         ? (resultString[1] = "0" + resultString[1])
//         : resultString[1];
//       return resultString[0] + resultString[1];
//     })
//     .join("\n");

//   return answer;
// };

// console.log(checkRoomNumber(data));
