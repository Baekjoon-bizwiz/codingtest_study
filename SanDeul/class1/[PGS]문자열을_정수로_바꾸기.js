function solution(s) {
  return Number(s); // +s || s/1
  // 아 암묵적 형변환 문제였군요... 글구 '-1234' 형태에 바로 Number || parseInt 씌워도 마이너스 정수로 반환이 되는군여
}
