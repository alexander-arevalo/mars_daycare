// DOCUMENT UPLOAD
var proofOfResidency;
function handleFileUpload() {
  const fileInput = document.getElementById("proofOfResidency");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("https://mars-daycare.onrender.com/api/upload", formData)
      .then((response) => {
        document.getElementById("proofLabel").textContent = response.data.url;
        proofOfResidency = response.data.url;
        console.log("Upload success:", response.data);
      })
      .catch((error) => {
        // Handle the error if the upload fails.
        console.error("Upload failed:", error);
      });
  }
}

document
  .getElementById("register")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form inputs' values
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
   

    // Perform any additional validation or data manipulation here

    // Create an object with the user's data
  
    await axios
      .post("https://mars-daycare.onrender.com/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
        proofOfResidency,
      })
      .then((res) => {
        console.log("Registered successfully");
        console.log("DATAAA " + res.data);
        alert("Successfully Registerd");
        window.location.replace("login.html");
      })
      .catch((err) => {
        console.log(err);
        alert("Email is Already in Use");
      });

    // Send the user data to the server or perform any desired action
    // For demonstration purposes, we'll just log the user object to the console
    console.log("user:", user);

    // Reset the form
    document.getElementById("register").reset();
  });
