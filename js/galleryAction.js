const urlParams = new URLSearchParams(window.location.search);
const galleryId = urlParams.get("id");

const back = document.getElementById("back");
back.addEventListener("click", () => {
  window.location.replace("adminGallery.html");
});
const token = localStorage.getItem("token");
let title = document.getElementById("title");
let descp = document.getElementById("description");

var imageURL;
async function getGalleryId() {
  await axios
    .get(`https://mars-daycare.onrender.com/api/gallery/${galleryId}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      title.textContent = res.data.title;
      descp.textContent = res.data.description;

      imageURL = res.data.galleryPicture;
    })
    .catch((err) => {
      console.log(err.message);
      alert("error");
    });
}
function viewImage() {
  console.log(imageURL);
  window.open(imageURL);
}
async function deleteById() {
  if (window.confirm("Are you sure to delete this gallery?")) {
    await axios
      .delete(`https://mars-daycare.onrender.com/api/gallery/${galleryId}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        alert("Gallery Successfully deleted");
        window.location.replace("adminGallery.html");
      })
      .catch(() => {
        alert("Something went wrong! Please try again");
      });
  } else {
    return;
  }
}
getGalleryId();
