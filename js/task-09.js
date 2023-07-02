function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const colorTextEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
buttonEl.addEventListener("click", changeColor);

function changeColor(event) {
  const ColorNew = getRandomHexColor();
  colorTextEl.textContent = ColorNew;
  bodyEl.style.backgroundColor = ColorNew;
}
