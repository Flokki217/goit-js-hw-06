let counterValue = 0;

const btnIncrementEl = document.querySelector(`[data-action="increment"]`);
const btnDescrEl = document.querySelector(`[data-action="decrement"]`);
btnIncrementEl.addEventListener("click", incrementClick);
btnDescrEl.addEventListener("click", descrClick);
function incrementClick() {
  updateDisplay((counterValue += 1));
}
function descrClick() {
  updateDisplay((counterValue -= 1));
}

function updateDisplay(val) {
  document.getElementById("value").textContent = val;
}
