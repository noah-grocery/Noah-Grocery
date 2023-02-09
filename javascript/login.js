const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored email and password
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      // Login successful
      alert('Login successful!');
    } else {
      // Login failed
      alert('Invalid email or password');
    }
  });

  const showHideButton = document.getElementById('show-hide-button');

  showHideButton.addEventListener('click', (event) => {
    const passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showHideButton.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      showHideButton.textContent = 'Show';
    }
  });

  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.addEventListener('invalid', (event) => {
      event.preventDefault();

      // Remove any existing error messages
      const errorMessages = document.querySelectorAll('p.error-message');
      errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
      });

      // Add a new error message
      let errorMessage;
      if (input.type === 'email') {
        errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.style.color = 'red';
        errorMessage.classList.add('error-message');
      } else {
        errorMessage = document.createElement('p');
        errorMessage.textContent = 'This field is required';
        errorMessage.style.color = 'red';
        errorMessage.classList.add('error-message');
      }

      input.parentNode.insertBefore(errorMessage, input.nextSibling);
    });
  });
