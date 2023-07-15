const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("pendingReserv.html");
});

let token = localStorage.getItem("token");
async function getUserId() {
  axios
    .get(`http://localhost:3001/api/enrollees/${userId}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      document.getElementById("firstName").textContent = res.data.firstName;
      document.getElementById("lastName").textContent = res.data.lastName;
      document.getElementById("relationship").textContent =
        res.data.relationship;
      document.getElementById("level").textContent = res.data.yearLevel;
      document.getElementById("email").textContent = res.data.email;
      document.getElementById("contact").textContent = res.data.phoneNumber;
      document.getElementById("birthDate").textContent = res.data.birthDate;
      document.getElementById("birthCert").textContent = res.data.birthCert;
      document.getElementById("validID").textContent = res.data.validID;
      document.getElementById("certificate").textContent = res.data.certificate;

      console.log(res.data);
    });
}

async function acceptById() {
  axios
    .patch(`http://localhost:3001/api/enrollees/${userId}/approve`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log(res.data);
    });
  alert("success");
}

getUserId();
