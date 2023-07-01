const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textOutput.textContent = textInput.value;
textOutput.textContent = "Anonymous";
textInput.addEventListener("input", takeName);

function takeName() {
  textOutput.textContent =
    textInput.value === "" ? "Anonymous" : textInput.value;
}
