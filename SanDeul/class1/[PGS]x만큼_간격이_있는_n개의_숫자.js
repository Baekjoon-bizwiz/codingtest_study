function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
} // 내 풀이(우헤헤 근본 풀이ㅎㅎ) - 성능은 for문이 우수

// 기발한 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
  // map에서 index가 0부터 시작하니까 1을 더해주면서 곱하는군요..!
}
