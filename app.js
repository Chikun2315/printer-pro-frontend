function goToLogin() {
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Temporary credentials
    if (username === "admin" && password === "admin") {

        // Try to save login state
        try {
            sessionStorage.setItem("loggedInUser", username);
        } catch (error) {
            console.warn("Session storage unavailable:", error);
        }

        // Redirect to home page
        window.location.href = "home.html";

    } else {

        document
            .getElementById("loginError")
            .classList.remove("d-none");
    }
}
