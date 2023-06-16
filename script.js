let submitButton = document.getElementById("submitbutton");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (password.value != confirmPassword.value) {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
  } else {
    password.classList.add("valid");
    confirmPassword.classList.add("valid");
  }
});
