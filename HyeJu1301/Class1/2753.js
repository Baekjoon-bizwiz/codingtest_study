const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

if(input % 4 == 0 && input % 100 != 0 || input % 400 == 0) {
    console.log(1);
} else {
    console.log(0);
}