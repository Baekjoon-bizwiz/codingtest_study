const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = Number.parseInt(line.trim());

// const input = 2000;

if (input % 4 === 0 && input % 100 !== 0) {
  console.log(1);
} else if (input % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
