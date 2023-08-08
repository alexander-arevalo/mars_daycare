// SUBMISSION FUNCTION
async function addAnnouncement(event) {
  event.preventDefault();
  let token = localStorage.getItem("token");
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  console.log("getting request", res.data);
  await axios
    .post(
      "http://localhost:3001/api/announcement",
      { title, description },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then(function (res) {
      alert("Added Announcement");
      window.location.reload()
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("announcementForm").reset();
}

document
  .getElementById("announcementForm")
  .addEventListener("submit", addAnnouncement);

//LIST FUNCTION

// function tableHandler() {
//   var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
//   input = document.getElementById("announcement__table");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("table");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td1 = tr[i].getElementsByTagName("td")[0];
//     td2 = tr[i].getElementsByTagName("td")[1];
//     if (td1 && td2) {
//       txtValue1 = td1.textContent || td1.innerText;
//       txtValue2 = td2.textContent || td2.innerText;
//       if (
//         txtValue1.toUpperCase().indexOf(filter) > -1 ||
//         txtValue2.toUpperCase().indexOf(filter) > -1
//       ) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

async function getAnnouncement() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/announcement", {
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
