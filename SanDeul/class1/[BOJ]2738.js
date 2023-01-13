const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.trim().split("\n");

// const input = `3 3
// 1 1 1
// 2 2 2
// 0 1 0
// 3 3 3
// 4 4 4
// 5 5 100`
//   .trim()
//   .split("\n");

const [testCase, ...processions] = input;
const returnNum = (str, index) => {
  return Number(str.split(" ")[index]);
};
const N = returnNum(testCase, 0);
const M = returnNum(testCase, 1);

const procession1 = [];
const procession2 = [];

for (let i = 0; i < processions.length; i++) {
  i < N ? procession1.push(processions[i]) : procession2.push(processions[i]);
}

const processionCalculate = (arr) => {
  return arr.map((e) => e.split(" ").map((e) => Number(e)));
};

const calProcession1 = processionCalculate(procession1);
const calProcession2 = processionCalculate(procession2);

let calNum = 0;
let result = [];

for (let j = 0; j < N; j++) {
  for (let k = 0; k < M; k++) {
    calNum = calProcession1[j][k] + calProcession2[j][k];
    result.push(calNum);
    calNum = 0;
  }
}
function chunk(data = [], size = 1) {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}

const calculatedResult = chunk(result, M);
const answer = calculatedResult.map((e) => e.join(" ")).join("\n");
console.log(answer);
