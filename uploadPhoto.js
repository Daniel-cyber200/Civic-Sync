import fs from "fs";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./firebaseConfig.js"; // or paste config here directly

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadPhoto(filePath, destinationPath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const storageRef = ref(storage, destinationPath);

    await uploadBytes(storageRef, fileBuffer);
    console.log("✅ Photo uploaded!");

    const url = await getDownloadURL(storageRef);
    console.log("📸 Download URL:", url);
    return url;
  } catch (e) {
    console.error("❌ Upload failed:", e);
  }
}

uploadPhoto("./test.jpg", "uploads/test.jpg");
