let name = document.getElementById("name");
let street = document.getElementById("street");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let comfirmedPassword = document.getElementById("comfirmedPassword");
let checkbox = document.getElementById("terms");
let divError = document.getElementById("error");
let clearButton = document.getElementById("clear");
let submitButton = document.getElementById("submit");
let error = document.getElementById("textError");
let allInputs = document.getElementsByClassName("inputs");
let errorMessage = document.createTextNode(
  "Your password is too short! Please provide a password that is at least 10 characters long."
);
let errorMessage2 = document.createTextNode("Passwords don't match");

//If the user try to submit
submitButton.addEventListener("click", tryingToSubmit);
function tryingToSubmit(event) {
  clearErrors();
  event.preventDefault();
  console.log(checkbox.checked);
  if (password.value.length < 10) {
    error.appendChild(errorMessage);
    password.style.border = "2px solid hsl(333deg, 100%, 44%)";
  } else if (comfirmedPassword.value.length < 10) {
    error.appendChild(errorMessage);
    comfirmedPassword.style.border = "2px solid hsl(333deg, 100%, 44%)";
  } else if (comfirmedPassword.value !== password.value) {
    password.style.border = "2px solid hsl(333deg, 100%, 44%)";
    comfirmedPassword.style.border = "2px solid hsl(333deg 100% 44%)";
    error.appendChild(errorMessage2);
  } else if (!checkbox.checked) {
    window.alert("Check the checkboxe");
  } else {
    window.alert("Success");
  }
}

function clearErrors() {
  password.style.border = "1px solid gray";
  comfirmedPassword.style.border = "1px solid gray";
}
