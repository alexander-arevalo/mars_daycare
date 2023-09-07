var studentPicture;

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
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var relationship = document.getElementById("relationship").value;
  var phoneNumber1 = document.getElementById("contact").value;
  var phoneNumber = phoneNumber1.toString();
  var address = document.getElementById("address").value;

  // Get the values from the form inputs

  await axios
    .post("https://database-zr19.onrender.com/api/requestId", {
      firstName,
      lastName,
      relationship,
      phoneNumber,
      address,
      studentPicture,
    })
    .then(function (res) {
      console.log("Requested successfully");
      console.log(res.data);
      alert("Requested successfully");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("reqForm").reset();
}

document.getElementById("reqForm").addEventListener("submit", handleSubmit);
