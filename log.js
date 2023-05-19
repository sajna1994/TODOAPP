

function login() {
    // get the values of the username and password input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // check if the username and password are correct
    if (username === 'admin' && password === '12345') {
      // set a session variable to indicate that the user is logged in
      sessionStorage.setItem('loggedin', 'true');
      // redirect to the main page
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password');
    }
  }
  
  // add an event listener to the form submit button
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
    login();
  });