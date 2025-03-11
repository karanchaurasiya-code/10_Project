let password = document.querySelector("#password");
let eye = document.querySelector("#input-img");

eye.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        eye.src = "eye_key_look_password_security_icon.png"; // Change to "open eye" icon
    } else {
        password.type = "password";
        eye.src = "eye_password_see_view_icon.png"; // Change back to "closed eye" icon
    }
});