//Reporting specific operations to firebase
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Save a report to Firestore
export async function saveReport(reportData) {
  try {
    const docRef = await addDoc(collection(db, "reports"), reportData);
    console.log("Report saved with ID: ", docRef.id);
    return docRef.id; // Optional: Return the ID for later use
  } catch (e) {
    console.error("Error adding report: ", e);
    throw e; // Re-throw for error handling in your UI
  }
}

// Fetch all reports
export async function getReports() {
  const querySnapshot = await getDocs(collection(db, "reports"));
  const reports = [];
  querySnapshot.forEach((doc) => {
    reports.push({ id: doc.id, ...doc.data() });
  });
  return reports;
}
