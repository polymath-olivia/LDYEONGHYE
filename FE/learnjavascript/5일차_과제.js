/* Q1. 조건문 (삼항 연산자)
문제: 다음 조건문을 삼항 연산자를 사용하여 다시 작성하세요.
*/
// const age = 20;
// let message;

// if (age >= 18) {
//   message = "성인입니다";
// } else {
//   message = "미성년자입니다";
// }

const age = 20;
const message = age >= 18 ? "성인입니다" : "미성년자입니다";
console.log(message);

/*Q2. 함수와 조건문
문제: 다음 함수의 출력 결과를 예측하고, 그 이유를 설명하세요.
*/

const compareNumbers = (a, b) => {
  if (a > b) {
    return "a is greater";
  } else if (b > a) {
    return "b is greater";
  }
};

console.log(compareNumbers(5, 5)); // 예상 결과값: undefied. a와 b가 같은 경우에 대한 조건에 대한 지정이 없다.

/*Q3. 데이터 타입
문제: 다음 코드의 출력 결과를 예측하고, 그 이유를 설명하세요.
*/

let x;
console.log(typeof x); // 예상 결과값: undefined

x = 5;
console.log(typeof x); // 예상 결과값: 5

x = "Hello";
console.log(typeof x); // 예상 결과값: Hello

/*Q4. 객체 만들어보기 */

const mainList = [
  {
    id: "1",
    name: "'최다'인플루언서수",
    number: "1,158,061 +",
  },
  {
    id: "2",
    name: "'최다'캠페인 진행",
    number: "942,737 +",
  },
  {
    id: "3",
    name: "'최다'리뷰생성",
    number: "8,288,434 +",
  },
];
console.log("🚀 ~ mainList:", mainList);
