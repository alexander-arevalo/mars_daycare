//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// ========== SLIDESHOW TRIAL ==========


//const images = [ 
//  { image: "./images/daily activity images/img1.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img2.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img3.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img4.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img5.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img6.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img7.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img8.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img9.jpg", text: " Activity ", description: "Activity short description"},
//  { image: "./images/daily activity images/img10.jpg", text: " Activity ", description: "Activity short description"}]

//images.image[0]


const images = [
  "./images/daily activity images/img1.jpg",
  "./images/daily activity images/img2.jpg",
  "./images/daily activity images/img3.jpg",
  "./images/daily activity images/img4.jpg",
  "./images/daily activity images/img5.jpg",
  "./images/daily activity images/img6.jpg",
  "./images/daily activity images/img7.jpg",
  "./images/daily activity images/img8.jpg",
  "./images/daily activity images/img9.jpg",
  "./images/daily activity images/img10.jpg",
]

let index = 0; // Starting index

   setInterval(() => {
     const img = document.getElementById("img");
     img.src = images[index];
      index = (index + 1) % images.length;
    }, 2000);

function nxt__btn(){
  if (index >= images.length - 1){
    return false;
  }
  index++;
  img.setAttribute('src', images[index]);
}

function prev__btn(){
  if (index <= 0) {
    return false;
  }
  index--;
  img.setAttribute('src', images[index]);
}



      