const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().toUpperCase().split("");
// const input = "zZa".toString().trim().toUpperCase().split("");

const checkAlphabet = input.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const resultArr = Object.entries(checkAlphabet);
const findMaxCount = resultArr.reduce((acc, cur) => {
  if (cur[1] > (acc[1] ?? 0)) {
    acc = cur;
  }
  return acc;
}, 0);

const checkDuplicate = resultArr.filter((e) => e[1] === findMaxCount[1]);
const answer = checkDuplicate.length > 1 ? "?" : findMaxCount[0];
console.log(answer);
