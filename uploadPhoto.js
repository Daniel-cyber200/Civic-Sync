import { storage } from "./firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import fs from "fs";

async function uploadPhoto(filePath, destinationPath) {
  try {
    // Read the file from disk 
    const fileBuffer = fs.readFileSync(filePath);

    // Create a reference to the Storage destination
    const storageRef = ref(storage, destinationPath);

    // Upload the file
    await uploadBytes(storageRef, fileBuffer);
    console.log("✅ Photo uploaded!");

    // Get the public URL
    const url = await getDownloadURL(storageRef);
    console.log("📸 Download URL:", url);
    return url;
  } catch (e) {
    console.error("❌ Upload failed:", e);
  }
}

// Example Usage (replace paths .jpg with loaction of image)
uploadPhoto("./test.jpg", "uploads./test.jpg");