// console.log("Hello world");

const a = 1; // 숫자 or number
const name2 = "chutzrit"; // 문자열 or string
const isRainning = true; // boolean (true, false)

const empty = null; // null
let message; // 변수 선언

// console.log("null 타입체크", empty === null); // null의 타입체크법

// console.log("🚀 ~ message:", typeof message); // undefined

console.log("empty", empty); // 값
// console.log("empty type!!", typeof empty); // 데이터타입
// // console.log(a); // 값
// console.log(typeof a); // 데이터타입

// 함수

// 매개변수가 있는 함수 정의
// 함수 선언식
// function welcome(userName, age) {
//   // 실행문
//   console.log("welcome ", name2);
//   console.log("나이는 ", age, "살 입니다");
//   // welcome 장현재
// }

// 함수 표현식
const welcome = (userName, age) => {
  // 실행문
  console.log("welcome ", userName);
  console.log("나이는 ", age, "살 입니다");
  // welcome 장현재
};

const name3 = "장현재";

// 인자가 있는 함수 호출
welcome(name3, 35); // 함수를 실행한다, 호출한다

//const inputWelcome = () => {
// 실행문
//const name = prompt("당신의 이름은 무엇입니까?");
//console.log("welcome ", name);};

//inputWelcome();

// 함수 정의
const double = (num) => {
  //실행문
  return num * 2;
};

// 함수 호출
//console.log("double",double(66)); //4
const doubleResult = double(66); //132
console.log("+1", doubleResult + 1);

/**
 * 1. multifly라는 함수를 작성하고, 함수 호출하기
 * 2. 곱할 기준값, 몇씩 곱해질지 받아서 해당값을 곱하 후 결과값 리턴하기
 * 3. 결과값 콘솔에 출력하기
 */

const multiply = (num, step) => {
  return num * step;
};

const multiplyResult = multiply(5, 10);
console.log("🚀 ~ multiplyResult", multiplyResult);

/**
 * 1. discount라는 변수 생성 후, 할인율은 소수점으로 저장
 * 2. account라는 함수 정의
 * 3. 사용자에게 값을 입력 받아서 inputPrice라는 변수 저장
 * 4. 해당 inputPrice의 타입 Number로 변환
 * 5. 할인율 계산한 결과값 return
 * 6. 함수 호출하여 console에 출력하기
 */

const discount = 0.5;
const account = () => {
  const inputPrice = Number(prompt("가격을 입력해주세요."));
  return inputPrice * discount;
};

console.log("가격은 : " + account());

/**
 * 1. discount 변수는 const discount. 할인율을 적용하기 위해 = 사용하고 할인율 소수점으로 적음
 * 2. account 함수를 정의는 const 뒤에 account 적고 = () => {안에 과정을 적는다}
 * 3. 사용자가 값을 입력하기 위해 prompt. 메세지를 보여주기 위해 ("가격을 입력해주세요").
 * 4. 문자로 작성되어서 Number로 감싸서 숫자로 변환
 * 5. 할인율을 return 받기 위해서 return. 그 후 값을 불러오기 위해 inputPrice. 할인을 하기 위해 * 후 할인이 적힌 discount.
 * 6. 함수를 호출하기 위해 console.log().
 * */
