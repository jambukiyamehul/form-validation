document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    function showError(input, message) {
        const small = input.parentElement.querySelector("small");
        small.textContent = message;
        small.classList.add("active");
        input.classList.add("error-input");
        input.classList.remove("success");
    }

    function showSuccess(input) {
        const small = input.parentElement.querySelector("small");
        small.textContent = "";
        small.classList.remove("active");
        input.classList.remove("error-input");
        input.classList.add("success");
    }

    function isEmailValid(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function checkName() {
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            return false;
        } else {
            showSuccess(nameInput);
            return true;
        }
    }

    function checkEmail() {
        const email = emailInput.value.trim();
        if (email === "") {
            showError(emailInput, "Email is required");
            return false;
        } else if (!isEmailValid(email)) {
            showError(emailInput, "Enter a valid email");
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    }

    function checkPassword() {
        const password = passwordInput.value.trim();
        if (password === "") {
            showError(passwordInput, "Password is required");
            return false;
        } else if (password.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters");
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    }

    function checkConfirmPassword() {
        const confirm = confirmPasswordInput.value.trim();
        if (confirm === "") {
            showError(confirmPasswordInput, "Confirm password is required");
            return false;
        } else if (confirm !== passwordInput.value.trim()) {
            showError(confirmPasswordInput, "Passwords do not match");
            return false;
        } else {
            showSuccess(confirmPasswordInput);
            return true;
        }
    }

    nameInput.addEventListener("blur", checkName);
    emailInput.addEventListener("blur", checkEmail);
    passwordInput.addEventListener("blur", checkPassword);
    confirmPasswordInput.addEventListener("blur", checkConfirmPassword);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const isNameValid = checkName();
        const isEmailValid = checkEmail();
        const isPasswordValid = checkPassword();
        const isConfirmValid = checkConfirmPassword();

        if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
            alert("Registration Successful!");
            form.reset();
        }
    });

});
