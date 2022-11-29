const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

// let input = [
//   "5",
//   "OOXXOXXOOO",
//   "OOXXOOXXOO",
//   "OXOXOXOXOXOXOX",
//   "OOOOOOOOOO",
//   "OOOOXOOOOXOOOOX",
// ];

const testCase = Number.parseInt(input.shift());

let answer = 0;
let n = 0;

for (let i = 0; i < testCase; i++) {
  for (element of input[i]) {
    if (element === "O") {
      if (n !== 0) {
        n = n + 1;
        answer = answer + n;
      } else {
        n += 1;
        answer = answer + n;
      }
    } else {
      n = 0;
    }
  }
  console.log(answer);
  n = 0;
  answer = 0;
}
