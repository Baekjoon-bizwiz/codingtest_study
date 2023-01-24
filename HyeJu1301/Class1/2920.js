const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const arr1 = ['1' ,'2', '3', '4', '5', '6', '7', '8']
const reversed = [...arr1].reverse()

if(JSON.stringify(input) === JSON.stringify(arr1)) {
    console.log('ascending');
} else if(JSON.stringify(input) === JSON.stringify(reversed)) {
    console.log('descending');
} else {
    console.log('mixed');
}

// JSON.stringify() :  JavaScript 값이나 객체를 JSON 문자열로 변환.
// Array.prototype.reverse() : 배열의 순서를 반대로 뒤집어줌.