var galleryPicture;
function handleFileUpload() {
  const fileInput = document.getElementById("galleryPicture");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:3001/api/upload", formData)
      .then((response) => {
        const testChange = document.getElementById("labelGallery");
        testChange.textContent = response.data.url;
        galleryPicture = response.data.url;
        alert("Uploaded!");
      })
      .catch((error) => {
        // Handle the error if the upload fails.
        console.error("Upload failed:", error);
      });
  }
}

//Define your function
async function addGallery(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let token = localStorage.getItem("token");
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(`for testing ${title} ${description} ${galleryPicture}`);
  await axios
    .post(
      "http://localhost:3001/api/gallery",
      { title, description, galleryPicture },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then(function (res) {
      console.log(res.data);
      alert("Added Gallery");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("galleryForm").reset();
  window.location.reload();
}

document.getElementById("galleryForm").addEventListener("submit", addGallery);

async function getGallery() {
  let token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3001/api/gallery", {
    headers: { Authorization: "Bearer " + token },
  });

  console.log(`Getting Request:`, res.data);
  const data = res.data.resp;

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
