function authenticate(username, password) {
    const validUsername = "admin";
    const validPassword = "1234";
    return username === validUsername && password === validPassword;
}

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = authenticate(username, password);
    document.getElementById("message").textContent = result ? "Login successful!" : "Invalid credentials.";
}