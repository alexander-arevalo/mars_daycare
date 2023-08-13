//  to freeze na navbar
const id = localStorage.getItem("id");
function updateContent(firstName, lastName) {
  document.getElementById("firstName").textContent = firstName;
  document.getElementById("lastName").textContent = lastName;
}

function getName() {
  return axios.get(`http://localhost:3001/api/auth/${id}`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getName()
    .then((response) => {
      console.log(response);
      const firstName = response.firstName;
      const lastName = response.lastName;

      updateContent(firstName, lastName);
    })
    .catch((error) => {
      console.error(error);
    });
});

var ids = localStorage.getItem("id");

async function getName() {
  try {
    const response = await axios.get(`http://localhost:3001/api/auth/${ids}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });

    return response.data; // Return the response data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error
  }
}

(async function () {
  try {
    const data = await getName();

    // Now you can access the data retrieved from the API
    document.getElementById("firstname").value = data.firstName;
    document.getElementById("lastname").value = data.lastName;
    document.getElementById("email").value = data.email;
  } catch (error) {
    console.error(error);
  }
})();

const submit = async (e) => {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("confirmPass").value;

  if (password === passwordConfirm) {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    passwordMismatch.style.display = "none";

    await axios
      .patch(
        `http://localhost:3001/api/auth/${ids}`,
        {
          firstName,
          email,
          lastName,
          password,
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((res) => {
        alert("Profile updated successfully");
        location.reload();
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });

    console.log(password);
  } else {
    passwordMismatch.style.display = "block";
  }
};

document.getElementById("updateProfile").addEventListener("submit", submit);
