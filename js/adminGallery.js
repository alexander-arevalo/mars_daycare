const fileUploadInputs = document.querySelectorAll(".galleryPicture");

fileUploadInputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    const fileName = event.target.files[0].name;
    const label = event.target.nextElementSibling;
    label.innerText = "Image selected: " + fileName;
  });
});

//Define your function
async function addGallery(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let token = localStorage.getItem("token");
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let galleryPicture = document.getElementById("galleryPicture").files[0];
  const formData = new FormData();

  if (!galleryPicture) return;

  formData.append("galleryPicture", galleryPicture);

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(`for testing ${title} ${description} ${galleryPicture}`);
  await axios
    .post(
      "http://localhost:3001/api/gallery",
      formData, // Use formData directly as the data
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(function (res) {
      console.log(res.data);
      alert("Add Gallery");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("galleryForm").reset();
}

document.getElementById("galleryForm").addEventListener("submit", addGallery);

//TABLE HANDLER
function tableHandler() {
  var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
  input = document.getElementById("list__table");
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

async function getGallery() {
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

getGallery();
