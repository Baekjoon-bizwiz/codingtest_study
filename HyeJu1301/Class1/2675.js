const fs = require('fs');
let input = fs.readFileSync('./HyeJu1301/input.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0]
let res = ''

for(let i = 1; i <= num; i++) {
    let arr = input[i].split(' ').map(x => x)
    let arr2 = arr[1].split('')

    for(let r = 0; r < arr2.length; r++) {
        res += arr2[r].repeat(arr[0])
    }
    res += '\n'
}
console.log(res);