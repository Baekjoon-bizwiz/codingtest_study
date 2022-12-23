const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line.toString().trim();

console.log(input.length);
