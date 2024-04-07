function validateForm() {
  var fullName = document.getElementById('fullName').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var ticketType = document.getElementById('ticketType').value;

  var errorMessage = "";

  if (fullName === "") {
    errorMessage += "Por favor, ingrese su nombre completo.\n";
  }

  if (email === "") {
    errorMessage += "Por favor, ingrese su correo electrónico.\n";
  } else if (!validateEmail(email)) {
    errorMessage += "Por favor, ingrese un correo electrónico válido.\n";
  }

  if (phone === "") {
    errorMessage += "Por favor, ingrese su número de teléfono.\n";
  }

  if (ticketType === "") {
    errorMessage += "Por favor, seleccione un tipo de entrada.\n";
  }

  if (errorMessage !== "") {
    document.getElementById('error-message').innerText = errorMessage;
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
