const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

if (input.length > 100) return;
const _input = input[0].split('');

let arr = [];
let result = [];

for (let i = 97; i <= 122; i++) {
  arr.push(String.fromCharCode(i));
}

arr.forEach((item) => {
  _input.forEach((char, idx) => {
    let add = _input.indexOf(char) === idx;
    if (char === item && add) return result.push(idx);
    return;
  });
  result.push(-1);
});

console.log(result.join(' '));
