function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("students__table");
  filter = input.value.trim().toUpperCase();
  table = document.getElementById("enrolleesTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
    if (td1 && td2) {
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      if (
        txtValue1.toUpperCase().indexOf(filter) > -1 ||
        txtValue2.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

async function getEnrollees() {
  let token = localStorage.getItem("token");
  const res = await axios
    .get("http://localhost:3001/api/enrollees", {
      headers: { Authorization: "Bearer " + token },
    })

    .then((res) => {
      console.log(`Getting enrollees:`, res.data);
      const data = res.data;

      const enrolleesTableBody = document.getElementById("enrolleesTableBody");

      // Clear the existing content
      enrolleesTableBody.innerHTML = "";

      // Loop through the data and create table rows with table data cells to display it
      data.forEach((enrollee) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = enrollee.firstName;
        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = enrollee.lastName;
        const status = document.createElement("td");
        status.textContent =
          enrollee.isApproved === true
            ? "Approved"
            : enrollee.isApproved === false
            ? "Declined"
            : "Pending";
        const actionCell = document.createElement("td");
        const button = document.createElement("button");
        button.textContent = "Details";
        button.classList.add("btn");
        // Add an event listener to the "Details" button
        button.addEventListener("click", () => {
          // Redirect the user to another HTML page
          window.location.href = `pendingAction.html?id=${enrollee._id}`;
        });
        actionCell.appendChild(button);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(status);
        row.appendChild(actionCell);
        enrolleesTableBody.appendChild(row);
      });
    });
}
// Call the function to fetch and display enrollees
getEnrollees();
