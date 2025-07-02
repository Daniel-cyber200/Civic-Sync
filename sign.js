// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    // Sign In Form Validation
    const signinForm = document.getElementById('signinForm');
    if(signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if(validateSignIn(email, password)) {
                // Handle successful sign in
                alert('Sign In Successful!');
                window.location.href = 'index.html';
            }
        });
    }

    // Sign Up Form Validation
    const signupForm = document.getElementById('signupForm');
    if(signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('newEmail').value;
            const password = document.getElementById('newPassword').value;
            
            if(validateSignUp(username, email, password)) {
                // Handle successful sign up
                alert('Account Created Successfully!');
                window.location.href = 'signin.html';
            }
        });
    }
});

function validateSignIn(email, password) {
    if(!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if(password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }
    
    return true;
}

function validateSignUp(username, email, password) {
    if(username.length < 3) {
        alert('Username must be at least 3 characters');
        return false;
    }
    
    if(!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if(password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}