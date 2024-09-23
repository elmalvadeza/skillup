document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const showPasswordToggle = document.querySelector('.show-password i');

    showPasswordToggle.addEventListener('click', () => {
        const isPasswordVisible = passwordInput.getAttribute('type') === 'text';

        passwordInput.setAttribute('type', isPasswordVisible ? 'password' : 'text');

        showPasswordToggle.classList.toggle('fa-eye-slash');
        showPasswordToggle.classList.toggle('fa-eye');
    });
});

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submit');
const loginForm = document.getElementById('loginForm');

// Função para validar o e-mail usando uma expressão regular simples
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Função para verificar se os campos estão preenchidos corretamente
function checkFormFields() {
  const emailValid = isValidEmail(emailInput.value.trim());
  const passwordFilled = passwordInput.value.trim() !== '';

  if (emailValid && passwordFilled) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Verificar os campos de input sempre que houver mudança
emailInput.addEventListener('input', checkFormFields);
passwordInput.addEventListener('input', checkFormFields);

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    localStorage.setItem('disableElement', 'true');
    if (!submitBtn.disabled) {
        
     
    window.location.href = '../pages/main.html';
   
    }
});
