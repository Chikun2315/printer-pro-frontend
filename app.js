function goToLogin() {
    window.location.href = "login.html";
}

function loginUser(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    // Temporary credentials
    if (username === "admin" && password === "admin") {

        sessionStorage.setItem(
            "loggedInUser",
            username
        );

        window.location.href = "home.html";

    } else {

        document
            .getElementById("loginError")
            .classList.remove("d-none");
    }
}