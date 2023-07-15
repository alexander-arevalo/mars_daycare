// DOCUMENT UPLOAD

const fileUploadInputs = document.querySelectorAll(".fileupload");

fileUploadInputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    const fileName = event.target.files[0].name;
    const label = event.target.nextElementSibling;
    label.innerText = "Image selected: " + fileName;
  });
});

document
  .getElementById("register")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form inputs' values
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var proofOfResidency = document.getElementById("proofOfResidency").value;

    // Perform any additional validation or data manipulation here

    // Create an object with the user's data
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      proofOfResidency: proofOfResidency,
    };
    await axios
      .post("http://localhost:3001/api/auth/signup", {
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
