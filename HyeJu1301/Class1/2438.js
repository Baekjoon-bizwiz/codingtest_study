const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

for (let i = 1; i <= input; i++){  // 별 개수의 초기값 1; 최대 별 개수 n; 별개수는 1씩 증가
    console.log("*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
}