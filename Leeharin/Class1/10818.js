let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const testArr = input.split('\n');
const nums = testArr[1].split(' ').map((x) => Number(x));

let max = nums[0];
let min = nums[0];

for (let i = 1; i <= nums.length; i++) {
  max < nums[i] && (max = nums[i]);
  min > nums[i] && (min = nums[i]);
}

console.log(`${min} ${max}`);
