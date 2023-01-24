function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((e) => Number(e))
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  return answer;
}
