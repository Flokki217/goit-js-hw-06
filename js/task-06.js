const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", blurValidate);
const inputLength = Number(inputEl.dataset.length);

function blurValidate() {
  if (inputEl.value.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
