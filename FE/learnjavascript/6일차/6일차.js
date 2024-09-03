// ###############################
// ########### 반복문 ############

// ########### for ############
for (let i = 0; i < 10; i++) {
  console.log(`${i}번째 실행`);
}

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

// for (let i = 0; i < bootcampStudents.length; i++) {
//   // bootcampStudents의 길이인 13만큼 반복 예상
//   console.log("학생 이름", i, ":", bootcampStudents[i]);
// }

const max = 5;
for (let i = 0; i < bootcampStudents.length && i < max; i++) {
  console.log("학생 이름", i, ":", bootcampStudents[i]);
}

const target = "김";
for (let i = 0; i < bootcampStudents.length; i++) {
  const student = bootcampStudents[i];
  if (student.includes(target)) {
    console.log("학생 이름", i, ":", bootcampStudents[i]);
  }
}

for (let i = 0; i < bootcampStudents.length; i++) {
  //13번
  console.log(i, "번째 실행");

  // ["김", "원", "명"];
  if (bootcampStudents[i].includes("김")) {
    console.log(`"학생 이름",${bootcampStudents[i]};씨`);
  }
}

// ########### forEach ############
console.log(" ##################################");
console.log(" ############ forEach #############");
console.log(" ##################################");

bootcampStudents.forEach((value, index) => {
  console.log("🚀 ~ bootcampStudents.forEach ~ index:", index);
  console.log("🚀 ~ bootcampStudents.forEach ~ value:", value);
});

const add = (a, b) => {
  return a + b;
};
console.log("🚀 ~ add(1, 2):", add(1, 2));

const add2 = (a, b) => a + b;

const studentNameList = bootcampStudents.map((student) => `${student}🥳`);

console.log("🚀 ~ add2(1, 2):", add2(1, 2));

bootcampStudents.map((student) => `${student}😍`);

const fireStudents = [
  {
    id: 1,
    name: "mark",
    age: 35,
    mbti: "ENFT",
  },
  {
    id: 2,
    name: "stella",
    age: 29,
    mbti: "INFT",
  },
  {
    id: 1,
    name: "emma",
    age: 31,
    mbti: "ISTP",
  },
];

fireStudents.map((student) => student.name.toUpperCase());

console.log(
  "🚀 ~ toUpperCase:",
  fireStudents.map((student) => student.name.toUpperCase())
);

const twentyStudents = fireStudents.filter((student) => student.age <= 29);
console.log("🚀 ~ twentyStudent:", twentyStudents);

const istpStudent = fireStudents.find((student) => student.mbti === "ISTP");
console.log("🚀 ~ twentyStudents:", twentyStudents);

const ttStudnet = fireStudents.find((student) => student.age >= 40);
console.log("🚀 ~ ttStudnet:", ttStudnet);
//조건식에 만족하는 첫번째 순서만 알려줌.

const isSomeStudent = fireStudents.some((student) => student.name === "mark");
const isEveryStudent = fireStudents.every((student) => student.age === "mark");
console.log("🚀 ~ isEveryStudent:", isEveryStudent);
console.log("🚀 ~ isSomeStudent:", isSomeStudent);

//some: 하나라도 조건식에 만족하면 true이고 끝.
//every: 모든 것이 조건식에 만족해야만 true

//output: ['MARK','STELLA','EMMA']
