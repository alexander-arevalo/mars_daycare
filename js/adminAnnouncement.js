// SUBMISSION FUNCTION
async function getAnnouncement() {
  let token = localStorage.getItem("token");
  const res = await axios.get("https://mars-daycare.onrender.com/api/announcement", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Getting Request:`, res.data);
  const data = res.data.resp;

  const announcementTableBody = document.getElementById(
    "announcementTableBody"
  );

  // Clear the existing content
  announcementTableBody.innerHTML = "";

  // Check if data is an array before using forEach
  data.map((announcement) => {
    const row = document.createElement("tr");

    // Create table data cells for announcement details
    const announcementCell = document.createElement("td");
    announcementCell.textContent = announcement.announcementDescription;
    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Details";
    button.classList.add("btn");
    button.addEventListener("click", () => {
      // Redirect the user to another HTML page
      window.location.href = `announcementAction.html?id=${announcement._id}`;
    });
    actionCell.appendChild(button);

    row.appendChild(announcementCell);
    row.appendChild(actionCell);
    announcementTableBody.appendChild(row);
  });
}

getAnnouncement();
