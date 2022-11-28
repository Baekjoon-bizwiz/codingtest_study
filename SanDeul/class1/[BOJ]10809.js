const line = require("fs").readFileSync("/dev/stdin", "utf8");
// let input = line.trim().split("");

// String.fromCharCode 메서드
// indexOf 메서드
// join 메서드 활용하기

// 정답 코드
let input = "baekjoon";

const result = [];

for (let i = 97; i < 123; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

const answer = result.join(" ");
console.log(answer);

// 시도한 과정
// let input = "baekjoon";
// let alpha = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// let result = [];

// for (let j = 0; j < alpha.length; j++) {
//   for (let i = 0; i < input.length; i++) {
//     if (alpha[j] == input[i]) {
//       if (result[j] == "-1") {
//         result.splice(j, 1, i);
//       } else if (result[j]) {
//       } else {
//         result.push(i);
//       }
//     } else {
//       if (!result[j]) {
//         result.push("-1");
//       }
//     }
//   }
// }

// const answer = result.join(" ");
// console.log(answer);
