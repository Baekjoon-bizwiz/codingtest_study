function solution(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  return result.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

// 문제를 풀고 다른 분의 풀이를 보고 나서, 배열을 뽑을 필요가 없다는 걸 알게 됐다...

function goodSolution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (num % i === 0) sum += i; // 더불어서 if문에서 코드 불럭을 사용하지 않았기 때문에 가독성이 더 좋을 수가 있구나... 하는거도 알게 됐다.
  }
  return sum;
}

// 습관적으로 배열 만들어서 취합해 출력하는 것 같다...(필요가 없는데도 ㅠ)
// 문제가 요구하는 출력 형태가 어떠해야 할 지, 어떻게 하면 가장 가볍게 그 형태를 만들 수 있을지? 에 대해 더 고려해보기.
