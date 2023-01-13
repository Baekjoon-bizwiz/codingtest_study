const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split("\n");

// const input = `aaah
// aaaaah`
//   .trim()
//   .split("\n");
// console.log(input);

input[0].length >= input[1].length ? console.log("go") : console.log("no");
