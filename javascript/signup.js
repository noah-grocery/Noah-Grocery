const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store the name, email, and password in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to the login page
    window.location.href = '/login.html';
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
