const currentDate = new Date().toISOString().split("T")[0];

// Calculate the date one year from now
const oneYearLater = new Date();
oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
const maxDate = oneYearLater.toISOString().split("T")[0];

// Set the current date as the minimum date and one year from now as the maximum date
document.getElementById("date").setAttribute("min", currentDate);
document.getElementById("date").setAttribute("max", maxDate);

async function handleSubmit(event) {
  event.preventDefault();
  let token = localStorage.getItem("token");
  let title = document.getElementById("title").value;
  let date1 = document.getElementById("date").value;
  let date = date1.toString();
  let time1 = document.getElementById("time").value;
  let time = time1.toString();
  let description = document.getElementById("description").value;

  console.log("TEST");
  console.log(`for testing ${title} ${date} ${time} ${description}`);
  await axios
    .post(
      "https://mars-daycare.onrender.com/api/event",
      {
        title,
        date,
        time,
        description,
      },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then(function (res) {
      console.log("Event Added Successfully");
      alert("Added Event");
    })
    .catch(function (err) {
      console.log(err);
      alert("Something went wrong");
    });

  document.getElementById("eventForm").reset();
  window.location.reload();
}

document.getElementById("eventForm").addEventListener("submit", handleSubmit);

//LIST FUNCTION

function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("calendar__table");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
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

async function getCalendar() {
  let token = localStorage.getItem("token");
  const res = await axios.get("https://mars-daycare.onrender.com/api/event", {
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

getCalendar();
