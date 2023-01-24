function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt === Math.round(sqrt) ? (sqrt + 1) ** 2 : -1;
}
