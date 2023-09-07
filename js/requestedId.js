const itemsPerPage = 5; // Set the number of items to display per page
let currentPage = 1; // Initialize the current page
const requestTableBody = document.getElementById("requestTableBody");
const paginationContainer = document.getElementById("paginationContainer");

async function getRequestId() {
  let token = localStorage.getItem("token");
  const res = await axios.get(
    "https://database-zr19.onrender.com/api/requestId",
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  console.log(`Registered Account:`, res.data);
  const data = res.data;

  updateTable(data);
  updatePaginationButtons(Math.ceil(data.length / itemsPerPage));
}

function renderTableRows(data) {
  requestTableBody.innerHTML = "";

  data.forEach((requestId) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = requestId.firstName;
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = requestId.lastName;
    const status = document.createElement("td");
    status.textContent =
      requestId.isApproved === true
        ? "Approved"
        : requestId.isApproved === false
        ? "Declined"
        : "Pending";
    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Details";
    button.classList.add("btn");
    // Add an event listener to the "Details" button
    button.addEventListener("click", () => {
      // Redirect the user to another HTML page
      window.location.href = `IdAction.html?id=${requestId._id}`;
    });
    actionCell.appendChild(button);
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(status);
    row.appendChild(actionCell);
    requestTableBody.appendChild(row);
  });
}

function updateTable(data) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  renderTableRows(currentPageData);
}

function updatePaginationButtons(totalPages) {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      getRequestId();
    });

    if (i === currentPage) {
      button.classList.add("active");
    }

    paginationContainer.appendChild(button);
  }
}

function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("request__table");
  filter = input.value.trim().toUpperCase();
  table = document.getElementById("requestTable");
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

  updateTable(data);
}

getRequestId();
