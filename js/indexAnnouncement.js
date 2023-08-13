var announcement = document.getElementById("announcement");

announcement.style.display = "flex";
announcement.style.justifyContent = "center";
announcement.style.alignItems = "center";
const token = localStorage.getItem("token");
const getAnnouncement = async () => {
  const data = await axios.get("http://localhost:3001/api/announcement", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(data.data.resp[0].announcementDescription + "test");
  console.log(data);
  announcement.textContent = data.data.resp[0].announcementDescription;
};
getAnnouncement();

// JavaScript to handle the dropdown functionality
const dropdownToggle = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

let dropdownOpen = false;
dropdownToggle.addEventListener("click", (event) => {
  event.preventDefault();
  if (dropdownOpen) {
    dropdownMenu.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
  }
  dropdownOpen = !dropdownOpen;
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (
    !dropdownToggle.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
    dropdownOpen = false;
  }
});
