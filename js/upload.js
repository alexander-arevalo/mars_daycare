const signoutLink = document.getElementById("sub__menu__link");

signoutLink.addEventListener("click", () => {
  window.location.replace("index.html");
});

function openProfile() {
  var subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open__menu");
}

function openEditForm() {
  var editFormWrap = document.getElementById("editFormWrap");
  editFormWrap.style.display = "flex";
}

function saveProfile(event) {
  event.preventDefault(); // Prevent form submission

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("userName");

  // Update the user profile name
  userName.textContent = firstName + " " + lastName;

  // Hide the edit form
  var editFormWrap = document.getElementById("editFormWrap");
  editFormWrap.style.display = "none";
}

  // end of profile function 



//upload function 

  document
  .getElementById("upload")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

     // Prevent the default form submission

    // Get the form inputs' values
    var birthCert = document.getElementById("birthCert").value;
    var validId = document.getElementById("validId").value;
    var certificate = document.getElementById("certificate").value;

    // Perform any additional validation or data manipulation here

    // Create an object with the user's data
    var upload = {
      birthCert : birthCert ,
      validId : validId ,
      certificate: certificate,
    };
    await axios
      .post("http://localhost:3001/api/upload", {
        birthCert,
        validId,
        certificate,
      })
      .then((res) => {
        console.log("Uploaded Successfully");
        console.log("DATA" + res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Send the user data to the server or perform any desired action
    // For demonstration purposes, we'll just log the user object to the console
    console.log("upload:", upload);

    // Reset the form
    document.getElementById("upload").reset();
  });
