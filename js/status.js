function tableHandler() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("status__table");
  filter = input.value.toUpperCase();
  table = document.getElementById("enrolleesTable");
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

async function getEnrollees() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/enrollees", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Getting enrollees:`, res.data);
  const data = res.data;
  const enrolleesTableBody = document.getElementById("statusTableBody");

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
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(status);
    enrolleesTableBody.appendChild(row);
  });
}

// Call the function to fetch and display enrollees
getEnrollees();
