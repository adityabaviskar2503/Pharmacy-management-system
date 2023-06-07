document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform authentication logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example authentication logic (replace with your own)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'homepage.html'; // Redirect to the homepage or the provided code file
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
