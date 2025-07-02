// Import Firebase modules
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase Auth instance
const auth = getAuth();

// Sign Up Function
export async function signUp(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
}

// Google Sign In
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
}

// Log Out
export async function logOut() {
    return await signOut(auth);
}
