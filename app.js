//For the core application!
import { signUp, signInWithGoogle, logOut} from "./auth.js";

//Sign up Form!
document.getElementById("signUpForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signUp(email, password);
        alert("Signed up successfully!");
    } catch (err) {
        console.error("Signup failed:", err.message);
        alert("Error: " + err.message);
    }
});
