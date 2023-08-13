const itemsPerPage = 5; // Set the number of items to display per page
let currentPage = 1; // Initialize the current page
const enrolleesTableBody = document.getElementById("enrolleesTableBody");
const paginationContainer = document.getElementById("paginationContainer");

async function getUser() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/enrollees", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Registered Account:`, res.data);
  const data = res.data;

  updateDisplayedData(data);
  updatePaginationButtons(Math.ceil(data.length / itemsPerPage));
}

function renderAccountRow(enrolee) {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = enrolee.firstName;
  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = enrolee.lastName;
  const status = document.createElement("td");
  status.textContent =
    enrolee.isApproved === true
      ? "Approved"
      : enrolee.isApproved === false
      ? "Declined"
      : "Pending";
  const actionCell = document.createElement("td");
  const button = document.createElement("button");
  button.textContent = "Details";
  button.classList.add("btn");
  // Add an event listener to the "Details" button
  button.addEventListener("click", () => {
    // Redirect the user to another HTML page
    window.location.href = `pendingAction.html?id=${enrolee._id}`;
  });
  actionCell.appendChild(button);
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(status);
  row.appendChild(actionCell);
  enrolleesTableBody.appendChild(row);
}

function updateDisplayedData(data) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  enrolleesTableBody.innerHTML = "";

  currentPageData.forEach((enrolee) => {
    renderAccountRow(enrolee);
  });
}

function updatePaginationButtons(totalPages) {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      getUser();
    });

    if (i === currentPage) {
      button.classList.add("active");
    }

    paginationContainer.appendChild(button);
  }
}

function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("enrollees__table");
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

  // After filtering, update displayed data based on the search filter
  getUser();
}
getUser();
