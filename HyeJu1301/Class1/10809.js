const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let res = []

// indexOf : 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환.
// String.fromCharCode() : 아스키코드번호를 받아 문자열을 구성, charCodeAt : 문자열중 하나를 선택하여 아스키코드 번호로 변환.

for(let i = 97; i <= 122; i++) {
    res.push(input.indexOf(String.fromCharCode(i)));
}

console.log(res.join(' '));