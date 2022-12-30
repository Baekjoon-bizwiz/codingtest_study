const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split("\n");

// const input = `3
// ACDKJFOWIEGHE
// O
// AB`
//   .trim()
//   .split("\n");

const testCase = input.shift();
const result = [];
let splitString = "";

for (let i = 0; i < input.length; i++) {
  splitString = input[i].replace(input[i].slice(1, input[i].length - 1), "");

  if (splitString.length < 2) {
    result.push(splitString.repeat(2));
  } else {
    result.push(splitString);
  }
}

const answer = result.join("\n");
console.log(answer);
