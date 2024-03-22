function login() {
    var usernameInput = document.getElementById('usernameInput'); // Get the username input element
    var passwordInput = document.getElementById('passwordInput'); // Get the password input element

    var username = usernameInput.value; // Get the value of the username input
    var password = passwordInput.value; // Get the value of the password input

    // Here you can perform validation, authentication, etc.
    // For a basic example, let's just do a simple check
    if (username === "admin" && password === "password") {
        window.location.href = "main_page/index.html"; // Replace with your desired action
    } else {
        alert("Invalid username or password. Please try again."); // Replace with your desired action
    }
}
function register(){

}