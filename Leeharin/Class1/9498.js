const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let grade;

switch (parseInt(parseInt(input) / 10)) {
  case 10:
  case 9:
    grade = 'A';
    break;
  case 8:
    grade = 'B';
    break;
  case 7:
    grade = 'C';
    break;
  case 6:
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log(grade);
