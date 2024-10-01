document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');
    const portfolio = document.getElementById('portfolio');

    // Simple login validation (for demo purposes)
    if (username === 'manjunath' && password === 'manjunath') {
        document.querySelector('.login-container').style.display = 'none';
        portfolio.style.display = 'block';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
