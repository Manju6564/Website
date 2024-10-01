document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');
    const portfolio = document.getElementById('portfolio');
    const successPopup = document.getElementById('successPopup');

    // Simple login validation (for demo purposes)
    if (username === 'user' && password === 'pass') {
        document.querySelector('.login-container').style.display = 'none';
        portfolio.style.display = 'block';
        
        // Change background and text color for dark theme
        document.body.classList.add('dark-theme');
        
        // Show success popup
        successPopup.style.display = 'flex';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});

// Close popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('successPopup').style.display = 'none';
});
