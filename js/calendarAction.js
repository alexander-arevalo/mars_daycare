const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);

const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.replace("requestedId.html");
});

let token = localStorage.getItem("token");

async function getEventById() {
  axios
    .get(`http://localhost:3001/api/event/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      document.getElementById("title").textContent = res.data.title;
      document.getElementById("date").textContent = res.data.date;
      document.getElementById("time").textContent = res.data.time;
      document.getElementById("description").textContent = res.data.description;
      console.log(res.data);
    })

    .catch((err) => {
      alert("Something went wrong, Please refresh the page");
    });
}

async function deleteById() {
  if (window.confirm("Are you sure to delete this event?")) {
    await axios
      .delete(`http://localhost:3001/api/event/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        alert("Successful!");
        window.location.replace("adminCalendar.html")
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  } else {
    return;
  }
}

getEventById();
