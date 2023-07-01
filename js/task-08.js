const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Please, field can't be empty!");
  }
  console.log(`User information = {
        Email: ${email.value}   Password: ${password.value}
    }`);
  event.currentTarget.reset();
}
