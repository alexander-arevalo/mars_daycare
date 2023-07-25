// ========== SLIDESHOW TRIAL ==========

const images = [
  {
    image: "./images/daily activity images/img1.jpg",
    text: " Morning Gathering ",
    description: "In Morning We Have Short Gathering",
  },
  {
    image: "./images/daily activity images/img2.jpg",
    text: " Buwan ng Wika ",
    description: "Celebration For Buwan Ng Wika",
  },
  {
    image: "./images/daily activity images/img3.jpg",
    text: " Prayer",
    description: "We Start The Day In Our Class With Prayer",
  },
  {
    image: "./images/daily activity images/img4.jpg",
    text: " Rabbies Awareness ",
    description:
      "The Puppet Show Teach Them About What To Becareful About Rabies",
  },
  {
    image: "./images/daily activity images/img5.jpg",
    text: " Puppet Show ",
    description: "For Awareness Of Rabbies",
  },
  {
    image: "./images/daily activity images/img6.jpg",
    text: " Exercise ",
    description: "We Teach Them How To Exercise",
  },
  {
    image: "./images/daily activity images/img7.jpg",
    text: " Outside Activity ",
    description: "We Had Quick Exercise Before Doing Activity Outside",
  },
  {
    image: "./images/daily activity images/img8.jpg",
    text: " Fun Games",
    description: "They Get To play Fun Games",
  },
  {
    image: "./images/daily activity images/img9.jpg",
    text: " What To Do In Earthquakse ",
    description: "We Teach Them What To Do in Earthquakes",
  },
  {
    image: "./images/daily activity images/img10.jpg",
    text: "Earthquake Drill ",
    description: "Short Drill On What To Do On Earthquake",
  },
];

let index = 0; // Starting index

setInterval(() => {
  const img = document.getElementById("img");

  img.src = images[index].image;

  document.getElementById("txt").innerHTML = images[index].text;
  document.getElementById("desc").innerHTML = images[index].description;
  index = (index + 1) % images.length;
}, 2000);

function nxt__btn() {
  if (index >= images.length - 1) {
    return false;
  }
  index++;
  img.setAttribute("src", images[index].image);
  document.getElementById("txt").innerHTML = images[index].text;
  document.getElementById("desc").innerHTML = images[index].description;
}

function prev__btn() {
  if (index <= 0) {
    return false;
  }
  index--;
  img.setAttribute("src", images[index].image);
  document.getElementById("txt").innerHTML = images[index].text;
  document.getElementById("desc").innerHTML = images[index].description;
}
