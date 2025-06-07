// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"
import { getAuth } from "@firebase/auth";
// The web app firebase configuration SDK v7.20.0
const firebaseConfig = {
    apiKey: "AIzaSyAUNCwg8PCbSH9X3qG_JwHu2Gm_JseW4dY",
    authDomain: "hackathon-2e24a.firebaseapp.com",
    projectId: "hackathon-2e24a",
    storageBucket: "hackathon-2e24a.firebasestorage.app",
    messagingSenderId: "733725065482",
    appId: "1:733725065482:web:5a9a5f8a181599b24cfaf3",
    measurementId: "G-HEZMMHMC9G"
  };
  // Initializing the firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const getAuth = getAuth(app);
  export { db, storage, auth };

  console.log("Firebase is working! DB:", db, "Storage:", storage);

  

  