const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("requestedId.html");
});

let token = localStorage.getItem("token");
console.log("this is token");
var imageURL;
var userImage;
var idURL;

async function getReqId() {
  axios
    .get(`https://database-zr19.onrender.com/api/requestId/${userId}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      document.getElementById("firstName").textContent = res.data.firstName;
      document.getElementById("lastName").textContent = res.data.lastName;
      document.getElementById("relationship").textContent =
        res.data.relationship;
      document.getElementById("contact").textContent = res.data.phoneNumber;
      document.getElementById("address").textContent = res.data.address;
      document.getElementById("fullName").textContent = res.data.fullName;
      document.getElementById("relationship1").textContent =
        res.data.relationship1;
      document.getElementById("contact1").textContent = res.data.phoneNumber2;
      document.getElementById("address1").textContent = res.data.address1;

      userImage = res.data.lastName;
      imageURL = res.data.studentPicture;
      idURL = res.data.personId;

      // document.getElementById("picture").textContent = res.data.studentPicture;
      console.log(res.data);
    });
}
function viewImage() {
  window.open(imageURL);
  // window.location.replace(imageURL);
  // console.log(imageURL);
}

function viewId() {
  window.open(idURL);
}

function downloadImage() {
  try {
    console.log("Downloading");
    fetch(imageURL)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${userImage}Image.jpg`;
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
      `https://database-zr19.onrender.com/api/requestId/approve/${userId}`,
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
      window.location.replace("requestedId.html");
    })
    .catch((err) => {
      alert("Something went wrong");
    });
}

async function declineById() {
  await axios
    .patch(
      `https://database-zr19.onrender.com/api/requestId/decline/${userId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      console.log(res.data);
      alert("Declined");
      window.location.replace("requestedId.html");
    })
    .catch((err) => {
      alert("Something went wrong ");
    });
}

getReqId();
