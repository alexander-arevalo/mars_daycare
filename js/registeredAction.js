const accountTable = document.getElementById("accountTable");
const firstNameCell = document.getElementById("firstNameCell");
const lastNameCell = document.getElementById("lastNameCell");
const emailCell = document.getElementById("emailCell");
const proofOfResidencyCell = document.getElementById("proofOfResidencyCell");
const backButton = document.getElementById("back");

// Fetch account details from the server
async function fetchAccountDetails() {
  try {
    const response = await fetch("http://localhost:5000/api/account-details");
    if (!response.ok) {
      throw new Error("Failed to fetch account details");
    }
    const data = await response.json();
    populateAccountDetails(data);
  } catch (error) {
    console.error(error);
  }
}

// Populate account details in the HTML table
function populateAccountDetails(details) {
  firstNameCell.textContent = details.firstName;
  lastNameCell.textContent = details.lastName;
  emailCell.textContent = details.email;
  proofOfResidencyCell.innerHTML = `<img src="${details.proofOfResidency}" alt="Proof of Residency">`;
}

// Button event listener
backButton.addEventListener("click", () => {
  window.location.replace("registeredAccount.html");
});

// Fetch account details when the page loads
fetchAccountDetails();