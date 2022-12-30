// const star = "*";
// const scale = 5;
// let diamond = "";

// for (let i = 1; i <= scale; i++) {
//   diamond += " ".repeat(scale - i) + star.repeat(i) + star.repeat(i - 1) + "\n";
// }
// for (let j = scale - 1; j > 0; j--) {
//   diamond += " ".repeat(scale - j) + star.repeat(j) + star.repeat(j - 1) + "\n";
// }
// console.log(diamond);

function makeDiamond(scale) {
  const star = "*";
  let diamond = "";

  for (let i = 1; i <= scale; i++) {
    diamond +=
      " ".repeat(scale - i) + star.repeat(i) + star.repeat(i - 1) + "\n";
  }
  for (let j = scale - 1; j > 0; j--) {
    diamond +=
      " ".repeat(scale - j) + star.repeat(j) + star.repeat(j - 1) + "\n";
  }
  return diamond;
}
console.log(makeDiamond(5));
