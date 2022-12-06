const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let getNums = input[i].split(' ');

  console.log(parseInt(getNums[0]) + parseInt(getNums[1]));
}
