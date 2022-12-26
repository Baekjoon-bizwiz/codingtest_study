const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number.parseInt(e));

// const input = "4 3"
//   .trim()
//   .split(" ")
//   .map((e) => Number.parseInt(e));

const calculate = (input) => {
  return (input[0] + input[1]) * (input[0] - input[1]);
};

console.log(calculate(input));
