const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let res = '';

if(90 <= input && input <= 100) {
    res = 'A'
} else if(80 <= input && input <= 89) {
    res = 'B';
} else if(70 <= input && input <= 79) {
    res = "C"
} else if(60 <= input && input <= 69) {
    res = "D"
} else {
    res = "F"
}

console.log(res);