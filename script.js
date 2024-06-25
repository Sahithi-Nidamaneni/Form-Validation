document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        const fullNameInput = document.getElementById('fullName');
        if (fullNameInput.value.trim() === '') {
            isValid = false;
            showError(fullNameInput, 'Please enter your full name.');
        } else {
            hideError(fullNameInput);
        }

        // Email validation
        const emailInput = document.getElementById('email');
        if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email address.');
        } else {
            hideError(emailInput);
        }
        const phoneNumberInput = document.getElementById('phoneNumber');
        if (!isValidPhoneNumber(phoneNumberInput.value.trim())) {
            isValid = false;
            showError(phoneNumberInput, 'Please enter a valid phone number.');
        } else {
            hideError(phoneNumberInput);
        }
        const passwordInput = document.getElementById('password');
        if (passwordInput.value.length < 8) {
            isValid = false;
            showError(passwordInput, 'Password must be at least 8 characters long.');
        } else {
            hideError(passwordInput);
        }
        const confirmPasswordInput = document.getElementById('confirmPassword');
        if (confirmPasswordInput.value !== passwordInput.value) {
            isValid = false;
            showError(confirmPasswordInput, 'Passwords do not match.');
        } else {
            hideError(confirmPasswordInput);
        }

        // If form is valid, you can submit it
        if (isValid) {
            $('#successModal').modal('show');
            form.reset();
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        return /^\d{10}$/.test(phoneNumber); // Adjust regex as per your phone number format
    }

    function showError(input, message) {
        const errorFeedback = input.nextElementSibling; // Get the sibling element for error feedback
        errorFeedback.innerText = message;
        errorFeedback.classList.add('active');
    }
    function hideError(input) {
        const errorFeedback = input.nextElementSibling; // Get the sibling element for error feedback
        errorFeedback.innerText = '';
        errorFeedback.classList.remove('active');
    }
});
