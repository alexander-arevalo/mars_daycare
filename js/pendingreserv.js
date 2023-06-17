function tableHandler() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("students__table");
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


async function getEnrollees() {
  try {
    const res = await axios.get("http://54.210.165.102/api/enrollees");
    console.log(`Getting enrollees: ${res.data}`);
    
    const enrolleesTableBody = document.getElementById("enrolleesTableBody");
    const data = res.data;

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
      status.textContent = "pending";
      const actionCell = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "Details";
      button.classList.add("btn");
      // Add an event listener to the "Details" button
      button.addEventListener("click", () => {
        // Redirect the user to another HTML page
      window.location.href = 'action.html';
      });
      actionCell.appendChild(button);
      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(status);
      row.appendChild(actionCell);
      enrolleesTableBody.appendChild(row);
    });
  } catch (err) {
    console.log(err);
  }
}

// Call the function to fetch and display enrollees
getEnrollees();
