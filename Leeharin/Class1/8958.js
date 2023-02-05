let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const testArr = input.split('\n');
for (let i in testArr) {
  if (i > 0) {
    let result = 0;
    let count = 0;
    const OX_Arr = testArr[i].split('');
    OX_Arr.map((item) => (item === 'O' ? (result = result + ++count) : (count = 0)));
    console.log(result);
  }
}
