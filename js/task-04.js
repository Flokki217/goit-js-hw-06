let counterValue = 0;

const btnEl = document.querySelectorAll("button");
const btnIncrementEl = btnEl[1];
const btnDescrEl = btnEl[0];
btnIncrementEl.addEventListener("click", incrementClick);
btnDescrEl.addEventListener("click", descrClick);
function incrementClick() {
  updateDisplay((counterValue += 1));
}
function descrClick() {
  updateDisplay((counterValue -= 1));
}

function updateDisplay(val) {
  document.getElementById("value").innerHTML = val;
}
