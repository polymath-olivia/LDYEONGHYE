// 스위치 버튼 off: Light 모드
// 스위치 버튼 on: Dark 모드

// const htmlEl = document.querySelector("html");
// const themeChangeEl = document.querySelector(".theme-change");
// console.log("🚀 ~ htmlEl:", htmlEl);

// const switchOn = () => {
//   console.log("Dark mode");
//   if (htmlEl.checked) {
//     // 스위치 버튼 on: Dark 모드
//     themeChangeEl.setAttribute("data-bs-theme", "dark");
//   } else {
//     // 스위치 버튼 off: Light 모드
//     console.log("Light mode");
//     themeChangeEl.setAttribute("data-bs-theme", "light");
//   }
// };

const htmlEl = document.querySelector("html");
console.log("🚀 ~ htmlEl:", htmlEl);
const inputEl = document.querySelector(".chutzrit-switch");
console.log("🚀 ~ inputEl:", inputEl);

// change 이벤트 함수 연결
const changeMode = () => {
  console.log("changeMode");
  if (inputEl.checked) {
    //checked
    htmlEl.setAttribute("data-bs-theme", "dark");
  } else {
    //unchecked
    console.log("해제!");
    htmlEl.setAttribute("data-bs-theme", "light");
  }
};

inputEl.addEventListener("change", changeMode);

changeMode(); //초기값
