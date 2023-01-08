let input = require('fs').readFileSync('/dev/stdin').toString().toUpperCase();
const result = [];

[...input].forEach((char) => {
  let tmp = char.charCodeAt(0);
  if (tmp >= 65 && tmp <= 91) {
    result.find((item) => item.char === char)
      ? (result[result.findIndex((item) => item.char === char)] = {
          char,
          idx: result[result.findIndex((item) => item.char === char)].idx + 1,
        })
      : result.push({ char, idx: 1 });
  }
});

let max = 0;
let rtnChar = '';

for (let i = 0; i < result.length; i++) {
  if (result[i].idx > max) {
    rtnChar = result[i].char;
    max = result[i].idx;
  } else if (result[i].idx < max) {
    rtnChar = rtnChar;
    max = max;
  } else rtnChar = '?';
}
console.log(rtnChar);
