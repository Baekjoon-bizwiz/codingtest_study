// 최종 제출 코드
const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

function TSR(input) {
  const T = input.shift();
  let S = [];
  let answer = [];
  let result = "";

  for (let i = 0; i < input.length; i++) {
    S.push(input[i].split(" "));
  }
  let P = "";
  for (let j = 0; j < S.length; j++) {
    const element = S[j][1].split("");
    element.forEach((e) => {
      P += e.repeat(S[j][0]);
    });
    answer.push(P);
    P = "";
  }
  for (let k = 0; k < answer.length; k++) {
    if (k + 1 == answer.length) {
      result += answer[k];
    } else {
      result += answer[k] + "\n";
    }
  }
  console.log(result);
}

TSR(input);

// 그리고 수많은 시도들......
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const test = `2
// 3 ABC
// 5 /HTP`;

// const input = test.split("\n");
// console.log(input); // (3) ['2', '3 ABC', '5 /HTP']

// const S1 = input[1].split(" ");
// const S2 = input[2].split(" ");
// console.log(S1, S2); // (2) ['3', 'ABC'] (2) ['5', '/HTP']

// const P1 = S1[1].split("");
// const P2 = S2[1].split("");
// console.log(P1, P2); // (3) ['A', 'B', 'C'] (4) ['/', 'H', 'T', 'P']

// let P1Result = "";

// for (let i = 0; i < P1.length; i++) {
//   let P1Element = P1[i];
//   P1Element = P1Element.repeat(S1[0]);
//   P1Result += P1Element;
// }

// console.log(P1Result);

// const test = `2
// 3 ABC
// 5 /HTP`;

// const test2 = `3
// 2 BNM
// 3 ACVE
// 4 HTPS
// `;

// const input = test2.split("\n");

// // let fs = require("fs");
// // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const T = input.shift();

// input.forEach((e) => {
//   const str = e.split(" ");
//   const R = str[0];

//   //   console.log(typeof str[1]); // string
//   let SElements = str[1]; // string
//   let splitedSElement = [];
//   let answer = "";
//   const SSplit = SElements.split("").forEach((e) => {
//     // Error
//     splitedSElement.push(e);

//     let S = "";
//     splitedSElement.forEach((e) => {
//       S += e.repeat(R);
//       answer = S;
//     });
//     console.log(S); // 출력 위치
//   });
// });

// +"\n";

// const test = `2
// 3 ABC
// 5 /HTP`;

// const test2 = `3
// 2 BNM
// 3 ACVE
// 4 HTPS
// `;

// const input = test2.split("\n");

// const S1 = input[1].split(" ");
// const S2 = input[2].split(" ");
// console.log(S1, S2); // (2) ['3', 'ABC'] (2) ['5', '/HTP']

// const P1 = S1[1].split("");
// const P2 = S2[1].split("");
// console.log(P1, P2); // (3) ['A', 'B', 'C'] (4) ['/', 'H', 'T', 'P']

// let P1Result = "";
// let P2Result = "";

// for (let i = 0; i < P1.length; i++) {
//   let P1Element = P1[i];
//   P1Element = P1Element.repeat(S1[0]);
//   P1Result += P1Element;
// }

// for (let i = 0; i < P2.length; i++) {
//   let P2Element = P2[i];
//   P2Element = P2Element.repeat(S2[0]);
//   P2Result += P2Element;
// }

// console.log(P1Result + "\n" + P2Result);

// const test2 = `3
// 2 BNM
// 3 ACVE
// 4 HTPS`;

// const input = test2.split("\n");
// console.log(input);

// const input = ["3", "2 BNM", "3 ACVE", "4 HTPS"];

// function TSR(input) {
//   const T = input.shift();
//   let S = [];

//   if (T <= 1) {
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       S.push(input[i].split(" "));
//     }
//     console.log(S);
//     // const P = S[1].split("");

//     let P = "";
//     for (let j = 0; j < S.length; j++) {
//       const element = S[j][1].split("");
//       element.forEach((e) => {
//         P += e.repeat(S[j][0]);
//       });
//       console.log(P);
//       P = "";
//     }
//     let PResult = "";

//     for (let i = 0; i < P.length; i++) {
//       let PElement = P[i];
//       PElement = PElement.repeat(S[0]);
//       PResult += PElement;
//     }

//     console.log(PResult);
//   }
// }

// readline
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", function (line) {
//   function TSR(line) {
//     const T = line.shift();
//     let S = [];
//     let answer = [];
//     let result = "";

//     for (let i = 0; i < line.length; i++) {
//       S.push(line[i].split(" "));
//     }
//     let P = "";
//     for (let j = 0; j < S.length; j++) {
//       const element = S[j][1].split("");
//       element.forEach((e) => {
//         P += e.repeat(S[j][0]);
//       });
//       answer.push(P);
//       P = "";
//     }
//     for (let k = 0; k < answer.length; k++) {
//       if (k + 1 == answer.length) {
//         result += answer[k];
//       } else {
//         result += answer[k] + "\n";
//       }
//     }
//     console.log(result);
//   }

//   rl.close();
// }).on("close", function () {
//   process.exit();
// });

// // fs
// const input = ["3", "2 BNM", "3 ACVE", "4 HTPS"];

// function TSR(input) {
//   const T = input.shift();
//   let S = [];
//   let answer = [];
//   let result = "";

//   for (let i = 0; i < input.length; i++) {
//     S.push(input[i].split(" "));
//   }
//   let P = "";
//   for (let j = 0; j < S.length; j++) {
//     const element = S[j][1].split("");
//     element.forEach((e) => {
//       P += e.repeat(S[j][0]);
//     });
//     answer.push(P);
//     P = "";
//   }
//   for (let k = 0; k < answer.length; k++) {
//     if (k + 1 == answer.length) {
//       result += answer[k];
//     } else {
//       result += answer[k] + "\n";
//     }
//   }
//   console.log(result);
// }

// TSR(input);
