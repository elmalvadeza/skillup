
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

const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit');
const togglePassword = document.getElementById('togglePassword');
const registerForm = document.getElementById('registerForm');
const entrar = document.querySelector('.entrar');


function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


function checkFormFields() {
  const fullNameFilled = fullNameInput.value.trim() !== '';
  const emailValid = isValidEmail(emailInput.value.trim());
  const passwordFilled = passwordInput.value.trim() !== '';

  if (fullNameFilled && emailValid && passwordFilled) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}


fullNameInput.addEventListener('input', checkFormFields);
emailInput.addEventListener('input', checkFormFields);
passwordInput.addEventListener('input', checkFormFields);

// registerForm.addEventListener('submit', function (event) {
//   event.preventDefault(); // Impede o envio do formulário
//   if (!submitBtn.disabled) {
//       setTimeout(() => {
//           window.location.href = '../index.html';
//         }, 1000);
//         localStorage.setItem('disableElement', 'true');
//   }
// });

registerForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  if (!submitBtn.disabled) {
      localStorage.setItem('disableElement', 'true');
      console.log('disableElement set to true'); // Verifique aqui

      setTimeout(() => {
          window.location.href = '../pages/main.html';
      }, 1000);
  }
});








