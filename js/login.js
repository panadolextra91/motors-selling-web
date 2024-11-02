function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    if (username === "admin" && password === "123") {
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }

    return false;
}
