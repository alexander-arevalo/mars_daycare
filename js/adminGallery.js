const fileUploadInputs = document.querySelectorAll(".gallery");

fileUploadInputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    const fileName = event.target.files[0].name;
    const label = event.target.nextElementSibling;
    label.innerText = "Image selected: " + fileName;
  });
});

//Define your function
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var galleryPicture = document.getElementById("galleryPicture").files[0];
  var formData = formData();

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(`for testing ${title} ${description} ${galleryPicture}`);
  await axios
    .post("http://localhost:3001/api/gallery", {
      title,
      description,
      galleryPicture,
    })
    .then(function (res) {
      console.log("enrolled successfully");
      console.log(res.data);
      alert("Successfully Reservered");
      window.location.replace("status.html");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("galleryForm").reset();
}

document.getElementById("galleryForm").addEventListener("submit", handleSubmit);

//TABLE HANDLER
function tableHandler() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("gallery__table");
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

async function galleryHandler() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/gallery", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Getting Request:`, res.data);
  const data = res.data;

  const galleryTableBody = document.getElementById("galleryTableBody");

  // Clear the existing content
  galleryTableBody.innerHTML = "";

  // Loop through the data and create table rows with table data cells to display it
  data.forEach((gallery) => {
    const row = document.createElement("tr");

    // Create table data cells for gallery details
    const galleryCell = document.createElement("td");
    galleryCell.textContent = gallery.title;

    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Details";
    button.classList.add("btn");
    button.addEventListener("click", () => {
      // Redirect the user to another HTML page
      window.location.href = `galleryAction.html?id=${gallery._id}`;
    });
    actionCell.appendChild(button);

    row.appendChild(galleryCell);
    row.appendChild(actionCell);
    galleryTableBody.appendChild(row);
  });
}

galleryHandler();
