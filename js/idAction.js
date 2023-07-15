const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("requestedId.html");
});

let token = localStorage.getItem("token");
console.log("this is token");

async function getUserId() {
  axios
    .get(`http://localhost:3001/api/reqId/${userId}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      document.getElementById("firstName").textContent = res.data.firstName;
      document.getElementById("lastName").textContent = res.data.lastName;
      document.getElementById("relationship").textContent =
        res.data.relationship;
      document.getElementById("contact").textContent = res.data.contact;
      document.getElementById("address").textContent = res.data.address;
      document.getElementById("picture").textContent = res.data.picture;

      console.log(res.data);
    });
}

async function acceptById() {
  axios
    .patch(
      `http://localhost:3001/api/auth/approve/${userId}`,
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
      `http://localhost:3001/api/auth/decline/${userId}`,
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
