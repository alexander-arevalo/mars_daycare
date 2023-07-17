async function handleSubmit(event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var date1 = document.getElementById("date").value;
  var date = date1.toString();
  var time1 = document.getElementById("time").value;
  var time = time1.toString();
  var description = document.getElementById("description").value;

  console.log("TEST");
  console.log(`for testing ${title} ${date} ${time} ${description}`);
  await axios
    .post("http://localhost:3001/api/event", {
      title,
      date,
      time,
      description,
    })
    .then(function (res) {
      console.log("Event Added Successfully");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("eventForm").reset();
}

document.getElementById("eventForm").addEventListener("submit", handleSubmit);

//TABLE HANDLER
function tableHandler() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("calendar__table");
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

async function calendarHandler() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/event", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Getting Request:`, res.data);
  const data = res.data;

  const calendarTableBody = document.getElementById("calendarTableBody");

  // Clear the existing content
  calendarTableBody.innerHTML = "";

  // Loop through the data and create table rows with table data cells to display it
  data.forEach((calendar) => {
    const row = document.createElement("tr");

    // Create table data cells for calendar details
    const calendarCell = document.createElement("td");
    calendarCell.textContent = calendar.title;

    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Details";
    button.classList.add("btn");
    button.addEventListener("click", () => {
      // Redirect the user to another HTML page
      window.location.href = `calendarAction.html?id=${calendar._id}`;
    });
    actionCell.appendChild(button);

    row.appendChild(calendarCell);
    row.appendChild(actionCell);
    calendarTableBody.appendChild(row);
  });
}

calendarHandler();
