function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");
const mainBox = document.querySelector("#controls");
createBtn.addEventListener("click", theCreator);
const inputEl = document.querySelector("input");
function theCreator(amount) {
  const boxSize = 30;
  const step = Number(inputEl.step);
  const min = Number(inputEl.min);
  const max = Number(inputEl.max);
  let doc = "";
  amount = Number(inputEl.value);
  if (amount >= min && amount <= max) {
    for (let i = 0; i < amount; i += step) {
      const size = boxSize + i * 10;
      const color = getRandomHexColor();
      doc += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
    }
    boxEl.insertAdjacentHTML("beforeend", doc);
  } else {
    alert("Oh sh*t this is wrong amount!!!");
  }
}
destroyBtn.addEventListener("click", function () {
  inputEl.value = "";
  boxEl.innerHTML = "";
});
