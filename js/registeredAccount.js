function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("account__table");
  filter = input.value.trim().toUpperCase();
  table = document.getElementById("accountTable");
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

async function getUser() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/auth/", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Registered Account:`, res.data);
  const data = res.data;
  const accountTableBody = document.getElementById("accountTableBody");

  // Clear the existing content
  accountTableBody.innerHTML = "";

  // Loop through the data and create table rows with table data cells to display it
  data.forEach((registered) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = registered.firstName;
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = registered.lastName;
    const status = document.createElement("td");
    status.textContent =
      registered.isApproved === true
        ? "Approved"
        : registered.isApproved === false
        ? "Declined"
        : "Pending";
    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Details";
    button.classList.add("btn");
    // Add an event listener to the "Details" button
    button.addEventListener("click", () => {
      // Redirect the user to another HTML page
      window.location.href = `registeredAction.html?id=${registered._id}`;
    });
    actionCell.appendChild(button);
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(status);
    row.appendChild(actionCell);
    accountTableBody.appendChild(row);
  });
}

// Call the function to fetch and display User
getUser();
