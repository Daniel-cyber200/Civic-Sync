//Entry Point
import { saveReport, getReports } from "./reports.js";

// Example: Saving a report based on what issue was sent
saveReport({
  title: "Test Report",
  content: "This is a test report.",
  createdAt: new Date()
}).then(() => console.log("Report saved!"));

// Example: Fetch reports
getReports().then(reports => console.log(reports));