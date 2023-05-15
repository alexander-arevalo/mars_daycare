//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// ========== SLIDESHOW TRIAL ==========


const images = [ 
 { image: "./images/daily activity images/img1.jpg", text: " Morning Gathering ", description: "In Morning We have short gathering"},
 { image: "./images/daily activity images/img2.jpg", text: " Activity 2 ", description: "Activity 2 short description"},
 { image: "./images/daily activity images/img3.jpg", text: " Activity 3", description: "Activity 3 short description"},
 { image: "./images/daily activity images/img4.jpg", text: " Activity 4", description: "Activity 4 short description"},
 { image: "./images/daily activity images/img5.jpg", text: " Activity 5 ", description: "Activity 5 short description"},
 { image: "./images/daily activity images/img6.jpg", text: " Activity 6 ", description: "Activity 6 short description"},
 { image: "./images/daily activity images/img7.jpg", text: " Activity 7  ", description: "Activity 7 short description"},
 { image: "./images/daily activity images/img8.jpg", text: " Activity 8", description: "Activity 8 short description"},
 { image: "./images/daily activity images/img9.jpg", text: " Activity 9", description: "Activity 9 short description"},
 { image: "./images/daily activity images/img10.jpg", text: " Activity 10", description: "Activity 10  short description"}]





let index = 0; // Starting index

   setInterval(() => {
    
 const img = document.getElementById("img");
    
     img.src = images[index].image;
    
      document.getElementById("txt").innerHTML = images[index].text;
      document.getElementById("desc").innerHTML = images[index].description;
      index = (index + 1) % images.length;
    }, 2000);

function nxt__btn(){
  if (index >= images.length - 1){
    return false;
  }
  index++;
  img.setAttribute('src', images[index].image);
  document.getElementById("txt").innerHTML = images[index].text;
      document.getElementById("desc").innerHTML = images[index].description;
}

function prev__btn(){
  if (index <= 0) {
    return false;
  }
  index--;
  img.setAttribute('src', images[index].image);
  document.getElementById("txt").innerHTML = images[index].text;
      document.getElementById("desc").innerHTML = images[index].description;
}



      