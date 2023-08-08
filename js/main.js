//  Proceed to log In

const logininterface = document.getElementById("login");

logininterface.addEventListener("click", () => {
  window.location.replace("login.html");
});

var announcement = document.getElementById("announcement");

announcement.style.display = "flex";
announcement.style.justifyContent = "center";
announcement.style.alignItems = "center";
const token = localStorage.getItem("token")
const getAnnouncement = async () => {
  const data = await axios.get("http://localhost:3001/api/announcement", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(data.data.resp[0].announcementDescription+ "test")
  console.log(data)
  announcement.textContent = data.data.resp[0].announcementDescription;
};
getAnnouncement()
