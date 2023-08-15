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
var healthRecord;

async function uploadBirthCert() {
  const fileInput = document.getElementById("birthCert");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    await axios
      .post("https://mars-daycare.onrender.com/api/upload", formData)
      .then((response) => {
        const testChange = document.getElementById("bc");
        testChange.textContent = response.data.url;
        alert("Uploaded!");
        console.log(response.data.url);
        console.log(birthCert + "birthCert");
        birthCert = response.data.url;
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
  }
}
async function uploadValidId() {
  const fileInput = document.getElementById("validId");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    await axios
      .post("https://mars-daycare.onrender.com/api/upload", formData)
      .then((response) => {
        const testChange = document.getElementById("vi");
        testChange.textContent = response.data.url;
        alert("Uploaded!");
        console.log(response.data.url);
        console.log(validId + "validId");
        validId = response.data.url;
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
  }
  console.log(validId);
}
async function uploadHealthRecord() {
  const fileInput = document.getElementById("healthRecord");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    await axios
      .post("https://mars-daycare.onrender.com/api/upload", formData)
      .then((response) => {
        const testChange = document.getElementById("hr");
        testChange.textContent = response.data.url;
        alert("Uploaded!");
        console.log(response.data.url);
        console.log(healthRecord + "healthrecord");
        healthRecord = response.data.url;
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
  }
}

async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let phoneNumber1 = document.getElementById("contact").value;
  let phoneNumber = phoneNumber1.toString();
  let email = document.getElementById("email").value;
  let birthday = document.getElementById("birthday").value;
  let relationship = document.getElementById("relationship").value;
  let birthDate = birthday.toString();
  let yearLevel = document.getElementById("yearLevel").value;
  let userId = localStorage.getItem("id");

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(
    `for testing ${firstName} ${lastName}  ${phoneNumber} ${email} ${birthDate} ${relationship} ${validId} valid id ${birthCert}`
  );
  await axios
    .post("https://mars-daycare.onrender.com/api/enrollees", {
      firstName,
      lastName,
      email,
      relationship,
      phoneNumber,
      birthDate,
      yearLevel,
      birthCert,
      validId,
      healthRecord,
      userId,
    })
    .then(function (res) {
      console.log("Enrolled successfully");
      console.log(res.data);
      alert("Successfully Reserved");
      window.location.replace("status.html");
      document.getElementById("studentForm").reset();
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.getElementById("uploadForm").addEventListener("submit", handleSubmit);
