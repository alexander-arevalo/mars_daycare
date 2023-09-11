const reqForm = document.getElementById("reqForm");
const emergencyPerson = document.getElementById("emergencyPerson");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton.addEventListener("click", () => {
  if (reqForm.checkValidity()) {
    reqForm.style.display = "none";
    emergencyPerson.style.display = "block";
  } else {
    reqForm.reportValidity();
  }
});
prevButton.addEventListener("click", () => {
  reqForm.style.display = "block";
  emergencyPerson.style.display = "none";
});
var studentPicture;
var personId;

function handleFileUpload() {
  const fileInput = document.getElementById("studentPicture");
  console.log("Getting file" + fileInput.files[0]);
  const file = fileInput.files[0];
  console.log("Running");
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("https://database-zr19.onrender.com/api/upload", formData)
      .then((response) => {
        const testChange = document.getElementById("labelID");
        testChange.textContent = response.data.url;
        studentPicture = response.data.url;
        console.log("Upload success:", response.data);
        alert("Uploaded!");
      })
      .catch((error) => {
        // Handle the error if the upload fails.
        console.error("Upload failed:", error);
      });
  } else {
    console.log("no file");
  }
}
function handleId() {
  const fileInput = document.getElementById("personId");
  console.log("Getting file" + fileInput.files[0]);
  const file = fileInput.files[0];
  console.log("Running");
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("https://database-zr19.onrender.com/api/upload", formData)
      .then((response) => {
        const testChange = document.getElementById("validId");
        testChange.textContent = response.data.url;
        personId = response.data.url;
        console.log("Upload success:", response.data);
        alert("Uploaded!");
      })
      .catch((error) => {
        // Handle the error if the upload fails.
        console.error("Upload failed:", error);
      });
  } else {
    console.log("no file");
  }
}
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var relationship = document.getElementById("relationship").value;
  var phoneNumber1 = document.getElementById("contact").value;
  var phoneNumber = phoneNumber1.toString();
  var address = document.getElementById("address").value;
  var fullName = document.getElementById("fullName").value;
  var relationship1 = document.getElementById("relationship1").value;
  var phoneNumber3 = document.getElementById("contact1").value;
  var phoneNumber2 = phoneNumber3.toString();
  var address1 = document.getElementById("address1").value;

  // Get the values from the form inputs

  await axios
    .post("https://database-zr19.onrender.com/api/requestId", {
      firstName,
      lastName,
      relationship,
      phoneNumber,
      address,
      studentPicture,
      fullName,
      relationship1,
      phoneNumber2,
      address1,
      personId,
    })
    .then(function (res) {
      console.log("Enrolled successfully");
      console.log(res.data);
      alert("Successfully Reserved");
      window.location.replace("reqId.html");
    })
    .catch(function (err) {
      console.log(err);
    });
}

document
  .getElementById("emergencyPerson")
  .addEventListener("submit", handleSubmit);
