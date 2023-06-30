const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", validateInput);
const inputLength = Number(inputEl.dataset.length);
// console.log(inputLength)
function validateInput() {
  if (inputEl.value.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
