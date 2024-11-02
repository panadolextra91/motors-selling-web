$(document).ready(function() {
    $("#registerForm").on("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Clear previous error messages
        $(".error-message").text("");

        // Username validation
        const username = $("#username").val();
        if (username.length < 3) {

            $("#usernameError").text("Username must be at least 3 characters.");
            isValid = false;
        }

        // Email validation
        const email = $("#email").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#emailError").text("Enter a valid email address.");
            isValid = false;
        }

        // Password validation
        const password = $("#password").val();
        if (password.length < 6) {
            $("#passwordError").text("Password must be at least 6 characters.");
            isValid = false;
        }

        // Confirm password validation
        const confirmPassword = $("#confirmPassword").val();
        if (confirmPassword !== password) {
            $("#confirmPasswordError").text("Passwords do not match.");
            isValid = false;
        }

        if (isValid) {
            alert("Registration successful!");
        }
    });
});
