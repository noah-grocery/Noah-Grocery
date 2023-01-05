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
