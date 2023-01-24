function solution(arr) {
  return (
    arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / arr.length
  );
}
