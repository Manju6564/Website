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

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle eye icon
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Profile dropdown functionality
const profileIcon = document.getElementById('profile');
const dropdown = document.getElementById('dropdown');

profileIcon.addEventListener('click', function() {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    // Hide portfolio and show login
    document.querySelector('.login-container').style.display = 'block';
    portfolio.style.display = 'none';
    document.body.classList.remove('dark-theme');
    dropdown.style.display = 'none'; // Hide dropdown
});
