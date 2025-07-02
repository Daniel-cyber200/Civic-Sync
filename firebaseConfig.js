// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";  // ✅ correct import here

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUNCwg8PCbSH9X3qG_JwHu2Gm_JseW4dY",
    authDomain: "hackathon-2e24a.firebaseapp.com",
    projectId: "hackathon-2e24a",
    storageBucket: "hackathon-2e24a.appspot.com", // ✅ fixed typo here (it was .firebasestorage.app)
    messagingSenderId: "733725065482",
    appId: "1:733725065482:web:5a9a5f8a181599b24cfaf3",
    measurementId: "G-HEZMMHMC9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);  // ✅ fixed line

// Export for use in other files
export { db, storage, auth };

console.log("✅ Firebase initialized. DB:", db, "Storage:", storage, "Auth:", auth);
