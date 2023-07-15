function tableHandler1() {
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
async function getRequestId() {
  let token = localStorage.getItem("token");
  const res = await axios
    .get("http://localhost:3001/api/reqId", {
      headers: { Authorization: "Bearer " + token },
    })

    .then((res) => {
      console.log(`Getting Request:`, res.data);
      const data = res.data;

      const requestTableBody = document.getElementById("requestTableBody");

      // Clear the existing content
      requestTableBody.innerHTML = "";

      // Loop through the data and create table rows with table data cells to display it
      data.forEach((reqId) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = reqId.firstName;
        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = reqId.lastName;
        const status = document.createElement("td");
        status.textContent =
          reqId.isApproved === true
            ? "Approved"
            : reqId.isApproved === false
            ? "Declined"
            : "Pending";
        const actionCell = document.createElement("td");
        const button = document.createElement("button");
        button.textContent = "Details";
        button.classList.add("btn");
        button.addEventListener("click", () => {
          // Redirect the user to another HTML page
          window.location.href = `idAction.html?id=${reqId._id}`;
        });
        actionCell.appendChild(button);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(status);
        row.appendChild(actionCell);
        requestTableBody.appendChild(row);
      });
    });
}

getRequestId();
