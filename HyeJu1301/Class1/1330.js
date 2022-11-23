const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// parseInt => 문자열을 정수로 반환
const a = parseInt(input[0])
const b = parseInt(input[1])


// if문 => 지정한 조건이 참일 경우 명령문을 실행, 거짓인 경우 다른 명령문을 실행
function res() {
    let result;
    
    if(a > b) {
        result = ">"
    } else if(a < b) {
        result = "<"
    } else if(a == b) {
        result = "=="
    }
    return result
}

console.log(res(input));
