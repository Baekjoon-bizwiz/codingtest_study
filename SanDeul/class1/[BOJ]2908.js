const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split(" ");

// const input = "734 893".trim().split(" ");

const result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input[i].split("").reverse().join(""));
}

let answer = "";
if (result[0] > result[1]) {
  answer = result[0];
} else {
  answer = result[1];
}

console.log(answer);
