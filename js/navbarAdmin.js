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
      const firstName = response.data.firstName;
      const lastName = response.data.lastName;

      updateContent(firstName, lastName);
    })
    .catch((error) => {
      console.error(error);
    });
});

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//  show/hide the answer for faqs

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // to change icon on the faqs
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//  show/hide the privacy and policy

function privacy() {
  var privacypopup = document.getElementById("privacy");
  privacypopup.classList.toggle("show");
}

//  show/hide the terms and condition

function terms() {
  var termspopup = document.getElementById("terms");
  termspopup.classList.toggle("show");
}
