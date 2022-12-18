const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().trim();

// String.fromCharCode() : 아스키코드번호를 받아 문자열을 구성, charCodeAt : 문자열중 하나를 선택하여 아스키코드 번호로 변환.

console.log(input.charCodeAt(''));

// 아스키코드 참고 블로그 https://hceaan.tistory.com/70