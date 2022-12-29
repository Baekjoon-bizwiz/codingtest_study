const line = require("fs").readFileSync("/dev/stdin", "utf8");
const input = line
  .trim()
  .split("")
  .map((e) => e.charCodeAt())
  .reduce((acc, cur) => {
    cur > 96 ? acc.push(cur - 32) : acc.push(cur + 32);
    return acc;
  }, []);

const answer = input.map((e) => String.fromCharCode(e)).join("");
console.log(answer);
