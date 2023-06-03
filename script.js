const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

// NAME VALIDATION
function validateName() {
  const name = document.getElementById("contactName").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter Surname and First Name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// PHONE NUMBER VALIDATION

function validatePhone() {
  const phone = document.getElementById("contactPhone").value;
  if (phone.length === 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "Phone no. should be 11 characters";

    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// EMAIL ADDRESS VALIDATION
function validateEmail() {
  const email = document.getElementById("contactEmail").value;
  if (email.length === 0) {
    emailError.innerHTML = "Email required";
    return false;
  }
  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// MESSAGE TYPE VALIDATION
function validateMessage() {
  const message = document.getElementById("contactMessage").value;
  const requiredCharacters = 40;
  const remainingCharacters = requiredCharacters - message.length;

  if (remainingCharacters > 0) {
    messageError.innerHTML = `${remainingCharacters} more characters required`;
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// SUBMITTING FORM
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 2000);
    return false;
  }
}
