const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  const [x, y] = input;

  if (x < 0 && y < 0) {
    console.log(3);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x > 0 && y > 0) {
    console.log(1);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  process.exit();
});

// const line = require("fs").readFileSync("/dev/stdin", "utf8");
// const input = line.toString().trim().split("\n");
// // const input = `12
// // 5`
// //   .toString()
// //   .trim()
// //   .split("\n");

// let answer = 0;

// if (input[0] < 0 && input[1] < 0) {
//   answer = 3;
// } else if (input[0] < 0 && input[1] > 0) {
//   answer = 2;
// } else if (input[0] > 0 && input[1] > 0) {
//   answer = 1;
// } else if (input[0] > 0 && input[1] < 0) {
//   answer = 4;
// }

// console.log(answer);
