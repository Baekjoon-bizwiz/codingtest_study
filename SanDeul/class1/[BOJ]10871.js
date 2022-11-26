const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

const NX = input[0].split(" ");
const N = Number.parseInt(NX[0]);
const X = Number.parseInt(NX[1]);
const A = input[1].split(" ");

let result = [];
for (let i = 0; i < N; i++) {
  if (Number.parseInt(A[i]) < X) {
    result.push(A[i]);
  }
}
const answer = result.join(" ");
console.log(answer);

// const line = require("fs").readFileSync("/dev/stdin", "utf8");
// let input = line.trim().split("\n");

// // let input = ["10 5", "1 10 4 9 2 3 8 5 7 6"];

// const NX = input[0].split(" ");
// const N = Number.parseInt(NX[0]);
// const X = Number.parseInt(NX[1]);
// const A = input[1].split(" ").map((e) => Number.parseInt(e));

// // console.log(NX);
// // console.log(X);
// // console.log(A);

// let result = [];

// for (let i = 0; i < N; i++) {
//   if (A[i] < X) {
//     result.push(A[i]);
//   }
// }
// // console.log(result);

// console.log(answer);
