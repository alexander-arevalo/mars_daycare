const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("status.html");
});

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

      console.log(res.data);
    });
}

getUserId();
