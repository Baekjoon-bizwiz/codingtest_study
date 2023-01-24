function solution(t, p) {
  let testCaseCount = t.length - (p.length - 1);
  const result = [];

  for (let i = 0; i < testCaseCount; i++) {
    result.push(t.slice(i, i + p.length));
  }

  const answer = result
    .map((e) => Number(e))
    .filter((e) => e <= Number(p)).length;

  return answer;
}
