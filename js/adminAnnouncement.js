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
  input = document.getElementById("request__table");
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
  const res = await axios
    .get("http://localhost:3001/api/announcement", {
      headers: { Authorization: "Bearer " + token },
    })

    .then((res) => {
      console.log(`Getting Request:`, res.data);
      const data = res.data;

      const announcementTableBody = document.getElementById(
        "announcementTableBody"
      );

      // Clear the existing content
      announcementTableBody.innerHTML = "";

      // Loop through the data and create table rows with table data cells to display it
      data.forEach((requestId) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = requestId.firstName;
        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = requestId.lastName;
        const actionCell = document.createElement("td");
        const button = document.createElement("button");
        button.textContent = "Details";
        button.classList.add("btn");
        button.addEventListener("click", () => {
          // Redirect the user to another HTML page
          window.location.href = `announcementAction.html?id=${requestId._id}`;
        });
        actionCell.appendChild(button);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(actionCell);
        announcementTableBody.appendChild(row);
      });
    });
}

announcementHandler();
