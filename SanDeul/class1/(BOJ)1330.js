let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

function compare(A, B) {
  if (A == B) {
    return "==";
  } else if (A > B) {
    return ">";
  } else {
    return "<";
  }
}

console.log(compare(A, B));
