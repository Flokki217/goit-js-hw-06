function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");
createBtn.addEventListener("click", function () {
  const inputEl = document.querySelector("input");
  const amount = Number(inputEl.value);
  theCreator(amount);
});

function theCreator(amount) {
  const boxSize = 30;
  let doc = "";
  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    doc += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxEl.innerHTML = doc;
}
destroyBtn.addEventListener("click", function () {
  boxEl.innerHTML = "";
});
