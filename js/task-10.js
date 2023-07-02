function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnEl = document.querySelector(`[data-create]`);
const destroyBtnEl = document.querySelector(`[data-destroy]`);

createBtnEl.addEventListener("click", createMe);
function createMe()
 
