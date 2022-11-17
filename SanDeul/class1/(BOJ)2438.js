let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

// let input = 5;

let pyramid = "";
if (1 <= input <= 100) {
  for (let i = 0; i < input; i++) {
    pyramid += "*";
    console.log(pyramid);
  }
}

// 자꾸 함수로 해결하려 해서 틀렸다...

// 언제 함수를 사용해야 할 지,
// return 문은 언제/왜 쓰는건지에 대한 정확한 파악이 필요.
