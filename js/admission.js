// DOCUMENT UPLOAD

const fileUploadInputs = document.querySelectorAll(".fileupload");

fileUploadInputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    const fileName = event.target.files[0].name;
    const label = event.target.nextElementSibling;
    label.innerText = "Image selected: " + fileName;
  });
});

// DOCUMENT PREV/NEXT BUTTON FUNCTION

const studentInfo = document.getElementById("studentInfo");
const uploadForm = document.getElementById("uploadForm");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton.addEventListener("click", () => {
  if (studentInfo.checkValidity()) {
    studentInfo.style.display = "none";
    uploadForm.style.display = "block";
  } else {
    studentInfo.reportValidity();
  }
});
prevButton.addEventListener("click", () => {
  studentInfo.style.display = "block";
  uploadForm.style.display = "none";
});
var birthCert;
var validId;
var certificate;
// Define your function
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lasName").value;
  let phoneNumber1 = document.getElementById("contact").value;
  let phoneNumber = phoneNumber1.toString();
  let email = document.getElementById("email").value;
  let birthday = document.getElementById("birthday").value;
  let relationship = document.getElementById("relationship").value;
  let birthDate = birthday.toString();
  let yearLevel = document.getElementById("yearLevel").value;

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
      birthCert,
      validId,
      certificate,
    })
    .then(function (res) {
      console.log("enrolled successfully");
      console.log(res.data);
      alert("Successfully Reservered");
      window.location.replace("status.html");
      document.getElementById("studentForm").reset();
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.getElementById("studentForm").addEventListener("submit", handleSubmit);
