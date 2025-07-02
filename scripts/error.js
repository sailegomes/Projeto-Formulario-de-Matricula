const inputEmail = document.getElementById('mail');
const erroEmail = inputEmail.parentElement.querySelector('.error');
const form = document.getElementById('formulario');

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
}

function mostrarErro() {
  erroEmail.style.display = 'flex'; // ou 'block'
  inputEmail.classList.add('input-erro');
}

function esconderErro() {
  erroEmail.style.display = 'none';
  inputEmail.classList.remove('input-erro');
}

// Validação em tempo real
inputEmail.addEventListener('input', function () {
  const email = inputEmail.value.trim();

  if (validarEmail(email)) {
    esconderErro();
  } else {
    mostrarErro(); // mantém o erro para campo vazio ou inválido
  }
});

// Validação ao tirar o foco
inputEmail.addEventListener('blur', function () {
  const email = inputEmail.value.trim();
  if (!validarEmail(email)) {
    mostrarErro();
  }
});

// Validação ao enviar
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = inputEmail.value.trim();

  if (!validarEmail(email)) {
    mostrarErro();
  } else {
    esconderErro();
    form.submit();
  }
});
