const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, field can't be empty!");
  }
  const User = {
    email: email.value,
    password: password.value,
  };
  console.log(User);
  event.currentTarget.reset();
}
