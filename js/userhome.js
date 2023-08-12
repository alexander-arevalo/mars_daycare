var announcement = document.getElementById("description");


const token2 = localStorage.getItem("token")
const getAnnouncement = async () => {
  const data = await axios.get("http://localhost:3001/api/announcement", {
    headers: {
      Authorization: "Bearer " + token2,
    },
  });
  console.log(data.data.resp[0].announcementDescription+ "test")
  console.log(data)
  announcement.textContent = data.data.resp[0].announcementDescription;
};
getAnnouncement()
