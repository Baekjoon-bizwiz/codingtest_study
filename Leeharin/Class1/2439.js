const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input[0]);

for (let i = 0; i < num; i++) {
  for (let j = num - i; j > 1; j--) {
    process.stdout.write(' ');
  }
  for (let j = 0; j <= i; j++) {
    process.stdout.write('*');
  }
  i !== num - 1 && process.stdout.write('\n');
}
