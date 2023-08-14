// Variables for counts and elements
let listAccounCount = 0;
let enroleesCount = 0;
let pendingCount = 0;
let pendingAccountCount = 0;
let pendingRequestIdCount = 0;

const listAccount = document.getElementById("accounts");
const enrollees = document.getElementById("enrollment");
const pendingEnrollment = document.getElementById("pendingEnrollment");
const pendingAccounts = document.getElementById("pendingAccounts");
const pendingRequestId = document.getElementById("requestId");

// Function to fetch data and update the counts
async function fetchDataAndUpdateCounts() {
  try {
    // Fetch account data
    const accountResponse = await axios.get("https://mars-daycare.onrender.com/api/auth", {
      headers: { Authorization: "Bearer " + token },
    });
    listAccounCount = accountResponse.data.length;
    pendingAccountCount = accountResponse.data.filter(
      (pending) => !pending.isApproved
    ).length;

    // Fetch enrollment data
    const enrollmentResponse = await axios.get(
      "https://mars-daycare.onrender.com/api/enrollees",
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    enroleesCount = enrollmentResponse.data.length;
    pendingCount = enrollmentResponse.data.filter(
      (pending) => !pending.isApproved
    ).length;

    // Fetch pending request id data
    const requestIdResponse = await axios.get(
      "https://mars-daycare.onrender.com/api/requestId",
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    pendingRequestIdCount = requestIdResponse.data.filter(
      (pending) => pending.isApproved == null
    ).length;

    // Update the counts in the UI
    listAccount.textContent = listAccounCount;
    enrollees.textContent = enroleesCount;
    pendingEnrollment.textContent = pendingCount;
    pendingAccounts.textContent = pendingAccountCount;
    pendingRequestId.textContent = pendingRequestIdCount;
  } catch (err) {
    // Handle errors, if necessary
    console.error("Error fetching data:", err);
  }
}

window.addEventListener("DOMContentLoaded", fetchDataAndUpdateCounts);
