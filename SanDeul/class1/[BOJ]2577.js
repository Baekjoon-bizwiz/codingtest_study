const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim().split("\n");

// const input = `150
// 266
// 427`
//   .trim()
//   .split("\n");

const calculate = (
  Number.parseInt(input[0]) *
  Number.parseInt(input[1]) *
  Number.parseInt(input[2])
)
  .toString()
  .split("");

let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < calculate.length; i++) {
  switch (calculate[i]) {
    case "0":
      result[0] += 1;
      break;
    case "1":
      result[1] += 1;
      break;
    case "2":
      result[2] += 1;
      break;
    case "3":
      result[3] += 1;
      break;
    case "4":
      result[4] += 1;
      break;
    case "5":
      result[5] += 1;
      break;
    case "6":
      result[6] += 1;
      break;
    case "7":
      result[7] += 1;
      break;
    case "8":
      result[8] += 1;
      break;
    case "9":
      result[9] += 1;
      break;
  }
}

const answer = result.join("\n");
console.log(answer);
