const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

for (let i = 1; i <= 9; i++) {
  console.log(`${parseInt(input)} * ${i} = ${parseInt(input) * i}`);
}
