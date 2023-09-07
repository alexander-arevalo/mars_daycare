const id = localStorage.getItem("id");
function updateContent(firstName, lastName) {
  document.getElementById("firstName").textContent = firstName;
  document.getElementById("lastName").textContent = lastName;
}

function getName() {
  return axios.get(`https://database-zr19.onrender.com/api/auth/${id}`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getName()
    .then((response) => {
      console.log(response);
      const firstName = response.data.firstName;
      const lastName = response.data.lastName;

      updateContent(firstName, lastName);
    })
    .catch((error) => {
      console.error(error);
    });
});
