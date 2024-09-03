// 조건문
const score = 60;
if (score > 60) {
  // 60점 이상인 경우
  console.log("합격");
} else {
  // 60점 이상이 아닌 경우
  console.log("불합격");
}

console.log("next!!!");

/**
 * 1. 90점 이상이면 A등급
 * 2. 80점 이상이면 B등급
 * 3. 70점 이상이면 C등급
 * 4. 70점 미만이면 D등급
 */

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("D등급");
}
if (score >= 60) {
  // 60점 이상인 경우
  console.log("합격");
} else {
  // 60점 이상인 경우
  console.log("불합격");
}

score >= 60 ? console.log("합격") : console.log("불햡격");

//score >=60 ? console.log("합격" , "불합격")

/**
 * 1. 마트에 아보카도가 있는지 체크(조건식)
 * 2. 아보카도가 있으면(true) 우유 6개 사기
 * 3. 아보카도가 없으면(false) 우유 1개 사기
 */
// 배열에 관해서는 추후 학습진행합니다.
const mart = ["🥑", "🥛", "🍕"]; // 배열을 통해 마트에 있는 재료를 'mart'에 저장합니다.
const isAvocado = mart.some((item) => item === "🥑"); // 배열의 내장함수인 'some'을 활용해 아보카도가 있는지 'Boolean' 타입으로 저장합니다.

if (isAvocado) {
  // 아보카도가 있는 경우
  console.log("🥛 🥛 🥛 🥛 🥛 🥛");
} else {
  // 아보카도가 없는 경우
  console.log("🥛");
}

// 삼항 연산자로 바꾸기

//내 답: isAvocado >= 1 ? console.log("🥛 🥛 🥛 🥛 🥛 🥛") : console.log("🥛'");

isAvocado ? console.log("🥛 🥛 🥛 🥛 🥛 🥛") : console.log("🥛");

console.log(isAvocado ? "🥛 🥛 🥛 🥛 🥛 🥛" : "🥛");

if (1) {
  console.log("true");
} else {
  console.log("false");
}

const input = "";

input ? console.log("true") : console.log("false");

const bootcampStudents = [
  "김원명",
  "박성민",
  "김현호",
  "주영신",
  "강지영",
  "김영혜",
  "조재원",
  "김태욱",
  "정세헌",
  "장현재",
  "김완재",
  "박준혁",
  "김은호",
];

//bootcampStudents 배열의 갯수
const studnetLen = bootcampStudents.length;
console.log("🚀 ~ studnetLen:", studnetLen);
console.log("🚀 ~ bootcampStudents:", bootcampStudents);
console.log("박준혁", bootcampStudents[5]);

const userName = "박준혁";
const userAge = "29";
const isUserMale = true;
const userMbti = "ESFP";

const user = {
  name: "박준혁",
  age: 29,
  isMale: true,
  mbti: userMbti,
}; //객체타입

//user.name;
console.log("🚀 ~ user.name:", user.name);

const categoryList = [
  // 배열 타입
  {
    id: "1",
    name: "선물관",
    subCategoryList: [
      {
        id: "1-1",
        name: "선착순 쿠폰",
      },
      {
        id: "1-2",
        name: "선물 가전",
      },
      {
        id: "1-3",
        name: "인기 디지털",
      },
    ],
  },
  {
    id: "2",
    name: "식품생활",
    subCategoryList: [
      {
        id: "2-1",
        name: "선착순 쿠폰",
      },
      {
        id: "2-2",
        name: "선물 가전",
      },
      {
        id: "2-3",
        name: "인기 디지털",
      },
    ],
  },
  {
    id: "3",
    name: "효도가전",
    subCategoryList: [
      {
        id: "3-1",
        name: "선착순 쿠폰",
      },
      {
        id: "3-2",
        name: "선물 가전",
      },
      {
        id: "3-3",
        name: "인기 디지털",
      },
    ],
  },
  {
    id: "4",
    name: "럭셔리",
    subCategoryList: [
      {
        id: "4-1",
        name: "선착순 쿠폰",
      },
      {
        id: "4-2",
        name: "선물 가전",
      },
      {
        id: "4-3",
        name: "인기 디지털",
      },
    ],
  },
];
console.log("🚀 ~ categoryList:", categoryList);
console.log("선물관을 뽑아오기 위함", categoryList[0].name);
console.log(categoryList[1].subCategoryList[1].name);
