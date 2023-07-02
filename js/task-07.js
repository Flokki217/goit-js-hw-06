const inputEl = document.getElementById("font-size-control");

const textEl = document.getElementById("text");

inputEl.addEventListener("input", Abracadabra);
function Abracadabra() {
  textEl.style.fontSize = inputEl.value + "px";
}
Abracadabra();
