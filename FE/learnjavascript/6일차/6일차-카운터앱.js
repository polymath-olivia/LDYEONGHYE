const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".increase-button");
const decreaseButtonEl = document.querySelector(".decrease-button");

let count = 0;
const minCount = 0;
const maxCoount = 10;

console.log("🚀 ~ counterEl:", counterEl);

const updateDisplay = () => {
  counterEl.innerText = count;
};

const increase = () => {
  if (count < maxCoount) {
    count = count + 1;
    updateDisplay();
  }
};

const decrease = () => {
  if (count > minCount) {
    count -= 1;
    updateDisplay();
  }
};

increaseButtonEl.addEventListener("click", increase);
decreaseButtonEl.addEventListener("click", decrease);

//Dom 조작 실습
const inputEl = document.querySelector(".input");
const textInputEl = document.querySelector(".text-input");
console.log("🚀 ~ inputEl:", inputEl.checked);

//체크 했을때
const checkFn = () => {
  console.log("check!!");
  if (inputEl.checked) {
    //체크 된 상태
    textInputEl.setAttribute("disabled", true);
  } else {
    //체크 해제 상태
    console.log("해제!!");
    textInputEl.removeAttribute("disabled");
  }
};

inputEl.addEventListener("change", checkFn);
