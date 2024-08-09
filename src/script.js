function togglePasswordVisibility() {
  const passwordInput = document.querySelector(".password-input");
  const iconEye = document.querySelector(".ph-eye");
  const iconEyeSlash = document.querySelector(".ph-eye-slash");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconEyeSlash.classList.add("hidden")
    iconEye.classList.remove("hidden")

  } else {
    passwordInput.type = "password";
    iconEyeSlash.classList.remove("hidden")
    iconEye.classList.add("hidden")
  }
}

function verifyForm() {
  const emailInputContainer = document.querySelector(".email-input-container");
  const emailInputValue = document.querySelector("input[type='email']").value;
  const passwordInputContainer = document.querySelector(".password-input-container");
  const passwordInput = document.querySelector("input[type='password']");
  const passwordInputValue = passwordInput ? passwordInput.value : document.querySelector("input[type='text']").value;
  
  const alertPasswordInvalid = document.querySelector(".alert-password-invalid");
  const alertEmailInvalid = document.querySelector(".alert-email-invalid");

  var emailValid = false, passwordValid = false;

  if(String(emailInputValue).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailValid = true;
    emailInputContainer.className = "email-input-container-normal email-input-container";
    alertEmailInvalid.classList.add("hidden");
  } else {
    emailInputContainer.className = "email-input-container-invalid email-input-container";
    alertEmailInvalid.classList.remove("hidden");
  }

  if(passwordInputValue != "") {
    passwordValid = true;
    passwordInputContainer.className = "password-input-container-normal password-input-container";
    alertPasswordInvalid.classList.add("hidden");
  } else {
    passwordInputContainer.className = "password-input-container-invalid password-input-container";
    alertPasswordInvalid.classList.remove("hidden");
  }

  if (emailValid && passwordValid) {
    document.querySelector("form").submit();
  }
}
