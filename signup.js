document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const submitBtn = document.querySelector('.auth-submit-btn');

    // Real-time validation
    form.addEventListener('input', () => {
        validateForm();
    });

    // Password visibility toggle
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('input');
            const icon = button.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Password strength indicator
    password.addEventListener('input', () => {
        const strengthBars = document.querySelectorAll('.strength-bar');
        const strength = calculatePasswordStrength(password.value);
        
        strengthBars.forEach((bar, index) => {
            bar.style.background = index < strength ? 
                ['#ff4d4d', '#ffcc00', '#2ecc71'][strength-1] : 
                '#ddd';
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form logic here
            alert('Account created successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        
        // Email validation
        const email = document.getElementById('email');
        if (!email.validity.valid) {
            setInvalid(email.parentElement.parentElement);
            isValid = false;
        } else {
            setValid(email.parentElement.parentElement);
        }

        // Password match validation
        if (password.value !== confirmPassword.value) {
            setInvalid(confirmPassword.parentElement.parentElement);
            document.getElementById('confirm-error').textContent = 'Passwords do not match';
            isValid = false;
        } else if (confirmPassword.value) {
            setValid(confirmPassword.parentElement.parentElement);
            document.getElementById('confirm-error').textContent = '';
        }

        // Terms checkbox
        if (!document.getElementById('terms').checked) {
            isValid = false;
        }

        // Toggle submit button
        submitBtn.disabled = !isValid;
        return isValid;
    }

    function setInvalid(element) {
        element.classList.add('invalid');
    }

    function setValid(element) {
        element.classList.remove('invalid');
    }

    function calculatePasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        return Math.min(strength, 3);
    }
});