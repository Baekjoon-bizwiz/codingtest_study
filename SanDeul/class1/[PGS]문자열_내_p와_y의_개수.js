function solution(s) {
  const result = s
    .toUpperCase()
    .split("")
    .reduce(
      (acc, cur) => {
        cur === "P" ? acc[0]++ : cur === "Y" ? acc[1]++ : false;
        return acc;
      },
      [0, 0]
    );
  return result[0] === result[1] ? true : false;
}

// 다 풀고 다른 분이 푼 코드를 보는데 단 한 줄로 해결하신 분 발견함 크으으

function numPy(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 잼따!!
