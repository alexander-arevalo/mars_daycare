// SUBMISSION FUNCTION
async function handleSubmit(event) {
  event.preventDefault();
  let token = localStorage.getItem("token");
  var description = document.getElementById("description").value;

  console.log("TEST");
  await axios
    .post(
      "http://localhost:3001/api/announcement",
      { description },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then(function (res) {
      console.log("Announcement Added");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("announcementForm").reset();
}

document
  .getElementById("announcementForm")
  .addEventListener("submit", handleSubmit);

//LIST FUNCTION

function tableHandler() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("announcement__table");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

async function announcementHandler() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/announcement", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Getting Request:`, res.data);
  const data = res.data;

  const announcementTableBody = document.getElementById(
    "announcementTableBody"
  );

  // Clear the existing content
  announcementTableBody.innerHTML = "";

  // Loop through the data and create table rows with table data cells to display it
  data.forEach((announcement) => {
    const row = document.createElement("tr");

    // Create table data cells for announcement details
    const announcementCell = document.createElement("td");
    announcementCell.textContent = announcement.title;

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

announcementHandler();
