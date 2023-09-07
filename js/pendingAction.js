const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("pendingReserv.html");
});
var lastName;
var urlVI;
var urlBC;
var urlHR;
let token = localStorage.getItem("token");
async function getUserId() {
  axios
    .get(`https://database-zr19.onrender.com/api/enrollees/${userId}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      document.getElementById("firstName").textContent = res.data.firstName;
      document.getElementById("lastName").textContent = res.data.lastName;
      lastName = res.data.lastName;
      document.getElementById("relationship").textContent =
        res.data.relationship;
      document.getElementById("level").textContent = res.data.yearLevel;
      document.getElementById("email").textContent = res.data.email;
      document.getElementById("contact").textContent = res.data.phoneNumber;
      document.getElementById("birthDate").textContent = res.data.birthDate;
      urlVI = res.data.validId;
      urlBC = res.data.birthCert;
      urlHR = res.data.healthRecord;
      // document.getElementById("birthCert").textContent = res.data.birthCert;
      // document.getElementById("validID").textContent = res.data.validID;
      // document.getElementById("certificate").textContent = res.data.certificate;

      console.log(res.data);
    });
}
function downloadVI() {
  download(urlVI, "ValidId");
}
function downloadHR() {
  download(urlHR, "HealthRecord");
}
function downloadBC() {
  download(urlBC, "BirthCertificate");
}
function viewImageBC() {
  window.open(urlBC);
}
function viewImageHR() {
  window.open(urlHR);
}
function viewImageVI() {
  window.open(urlVI);
}
// function viewImage(url) {
//   window.location.replace(url);
//   console.log(url);
// }
function download(url, type) {
  try {
    console.log("Downloading");
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${lastName}${type}.jpg`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  } catch (err) {
    alert("Something went wrong" + err.message);
  }
}
async function acceptById() {
  await axios
    .patch(
      `https://database-zr19.onrender.com/api/enrollees/approve/${userId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      alert("Approved");
      window.location.replace("pendingReserv.html");
      console.log(res.data);
    })
    .catch((err) => {
      alert("Something went wrong, Please try again");
    });
}
async function declinedById() {
  await axios
    .patch(
      `https://database-zr19.onrender.com/api/enrollees/decline/${userId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      alert("Declined");
      window.location.replace("pendingReserv.html");
      console.log(res.data);
    })
    .catch((err) => {
      alert("Something went wrong, Please try again");
    });
}

getUserId();
