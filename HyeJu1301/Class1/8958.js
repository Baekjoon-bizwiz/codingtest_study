const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0]

for(let i = 1; i <= num; i++) {
    let count = 0
    let res = 0

    for(let r = 0; r < input[i].length; r++) {
        if(input[i][r] === 'O') {
            count ++
        } else {
            count = 0
        }
        res += count
    }
    console.log(res);
}