document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Mark the user as logged in
    sessionStorage.removeItem("isLoggedIn");

    alert("Login successful!");

    // Open dashboard
    window.location.href = "dashboard.html";

});