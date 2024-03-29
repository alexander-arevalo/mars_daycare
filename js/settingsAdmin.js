var id = localStorage.getItem("id");

async function getName() {
  try {
    const response = await axios.get(
      `https://database-zr19.onrender.com/api/auth/${id}`,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    );

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
        `https://database-zr19.onrender.com/api/auth/${id}`,
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
