//  to signout

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

// Define your function
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var phoneNumber1 = document.getElementById("contact").value;
  var phoneNumber = phoneNumber1.toString();
  var email = document.getElementById("email").value;
  var birthday = document.getElementById("birthday").value;
  var relationship = document.getElementById("relationship").value;
  var birthDate = birthday.toString();
  var yearLevel = document.getElementById("yearLevel").value;

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(
    `for testing ${firstName} ${lastName}  ${phoneNumber} ${email} ${birthDate} ${relationship}`
  );
  await axios
    .post("http://localhost:3001/api/enrollees", {
      firstName,
      lastName,
      email,
      relationship,
      phoneNumber,
      birthDate,
      yearLevel,
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

  document.getElementById("myForm").reset();
};

document.getElementById("myForm").addEventListener("submit", handleSubmit);
