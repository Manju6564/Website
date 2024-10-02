const validUsername = "user";
const validPassword = "pass";
let idleTime = 0;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = ""; // Clear any error message
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("profileContainer").style.display = "block";
        resetIdleTimer(); // Start idle timer
    } else {
        errorMessage.textContent = "Invalid credentials. Please try again.";
    }
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function logout() {
    document.getElementById("profileContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "flex"; // Show login again
    clearIdleTimer(); // Clear timer on logout
}

// Idle Timer Functions
function resetIdleTimer() {
    idleTime = 0;
    document.body.addEventListener('mousemove', idleReset);
    document.body.addEventListener('keypress', idleReset);
    clearInterval(idleInterval);
    idleInterval = setInterval(checkIdleTime, 1000); // Check every second
}

function idleReset() {
    idleTime = 0; // Reset idle time on activity
}

function checkIdleTime() {
    idleTime++;
    if (idleTime >= 300) { // 300 seconds = 5 minutes
        logout(); // Logout after 5 minutes
    }
}

function clearIdleTimer() {
    clearInterval(idleInterval);
    document.body.removeEventListener('mousemove', idleReset);
    document.body.removeEventListener('keypress', idleReset);
}

let idleInterval = setInterval(checkIdleTime, 1000); // Start idle check
