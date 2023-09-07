const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("registeredAccount.html");
});
var urlImage;
let token = localStorage.getItem("token");
console.log("this is token");

async function getUserId() {
  axios
    .get(`https://database-zr19.onrender.com/api/auth/${userId}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      document.getElementById("firstName").textContent = res.data.firstName;
      document.getElementById("lastName").textContent = res.data.lastName;
      document.getElementById("email").textContent = res.data.email;

      urlImage = res.data.proofOfResidency;
      console.log(res.data);
    });
}

function viewImage() {
  window.open(urlImage);
}
async function acceptById() {
  axios
    .patch(
      `https://database-zr19.onrender.com/api/auth/approve/${userId}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      alert("Accepted");
      window.location.replace("registeredAccount.html");
    });
}

async function declineById() {
  axios
    .patch(
      `https://database-zr19.onrender.com/api/auth/decline/${userId}`,
      {},
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      console.log(res.data);
      alert("Declined");
      window.location.replace("registeredAccount.html");
    });
}

getUserId();
