var announcement = document.getElementById("announcement");

announcement.style.display = "flex";
announcement.style.justifyContent = "center";
announcement.style.alignItems = "center";
const token = localStorage.getItem("token");
const getAnnouncement = async () => {
  const data = await axios.get("https://mars-daycare.onrender.com/api/announcement", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(data.data.resp[0].announcementDescription + "test");
  console.log(data);
  announcement.textContent = data.data.resp[0].announcementDescription;
};
getAnnouncement();
