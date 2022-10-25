const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const form = document.querySelector("#main-form");
const errorMessage = document.createElement("div");
errorMessage.classList.add("error-message");

function check() {
  if(password.value != confirmPassword.value) {
  password.classList.add("error");
  confirmPassword.classList.add("error");
  errorMessage.textContent = "Please ensure passwords match."
  form.appendChild(errorMessage)
}else{
  password.classList.remove("error");
  confirmPassword.classList.remove("error");
  form.removeChild(errorMessage)
}
}