function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("status__table");
  filter = input.value.toUpperCase();
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

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);

async function getEnrollees() {
  let token = localStorage.getItem("token");
  const res = await axios.get("https://mars-daycare.onrender.com/api/enrollees", {
    headers: { Authorization: "Bearer " + token },
  });

  const data = res.data.filter(
    (item) => item.userID === localStorage.getItem("id")
  );
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
