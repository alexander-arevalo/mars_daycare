const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("adminAnnouncement.html");
});
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const announcementText = document.getElementById("announcement");

var token = localStorage.getItem("token");
async function getAnnouncementById() {
  await axios
    .get(`https://mars-daycare.onrender.com/api/announcement/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      announcementText.value = res.data.announcementDescription;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
getAnnouncementById();

async function editById() {
  console.log("tokeen" + token);
  await axios
    .post(
      `https://mars-daycare.onrender.com/api/announcement/${id}`,
      { description: announcementText.value },
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      alert("Announcement is successfully updated");
      window.location.replace("adminAnnouncement.html");
    })
    .catch((err) => {
      alert("Something went wrong, Please try again");
    });
}

async function deleteById() {
  if (window.confirm("Are you sure to delete this announcement?")) {
    await axios
      .delete(`https://mars-daycare.onrender.com/api/announcement/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        alert("Announcement is successfully deleted");
        window.location.replace("adminAnnouncement.html");
      })
      .catch((err) => {
        alert("Something went wrong, Please try again");
      });
  } else {
    return;
  }
}
