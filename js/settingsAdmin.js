const firstNameDefault = localStorage.getItem("firstName");
const lastNameDefault = localStorage.getItem("lastName");
const emailDefault = localStorage.getItem("email");

document.getElementById("firstname").value = firstNameDefault;

document.getElementById("lastname").value = lastNameDefault;
document.getElementById("email").value = emailDefault;

const submit = async (e) => {
  e.preventDefault();
  password = document.getElementById("password").value;
  passwordConfirm = document.getElementById("confirmPass").value;

  if (password == passwordConfirm) {
    id = localStorage.getItem("id");
    firstName = document.getElementById("firstname").value;
    lastName = document.getElementById("lastname").value;
    passwordMismatch.style.display = "none";

    await axios.post(`http://localhost:3001/api/auth/${id}`, {
      firstName,
      email,
      lastName,
      password,
    });

    console.log(password);
  } else {
    passwordMismatch.style.display = "block";
  }
};

document.getElementById("updateProfile").addEventListener("submit", submit);
