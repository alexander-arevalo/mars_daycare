// FORM UPLOAD

var galleryPicture;
function handleFileUpload() {
  const fileInput = document.getElementById("galleryPicture");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("https://database-zr19.onrender.com/api/upload", formData)
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
      "https://database-zr19.onrender.com/api/gallery",
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
const itemsPerPage = 5; // Set the number of items to display per page
let currentPage = 1; // Initialize the current page

const galleryTableBody = document.getElementById("galleryTableBody");
const paginationContainer = document.getElementById("paginationContainer");

async function getGallery() {
  let token = localStorage.getItem("token");
  const res = await axios.get(
    "https://database-zr19.onrender.com/api/gallery",
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = res.data.resp;

  updateDisplayedData(data);
  updatePaginationButtons(Math.ceil(data.length / itemsPerPage));
}

function renderGalleryRow(gallery) {
  const row = document.createElement("tr");
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
}

function updateDisplayedData(data) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  galleryTableBody.innerHTML = "";

  currentPageData.forEach((gallery) => {
    renderGalleryRow(gallery);
  });
}

function updatePaginationButtons(totalPages) {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      getGallery();
    });

    if (i === currentPage) {
      button.classList.add("active");
    }

    paginationContainer.appendChild(button);
  }
}

getGallery();
