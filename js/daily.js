// ========== SLIDESHOW TRIAL ==========

const images = [];
async function getDailyAct() {
  try {
    const response = await axios.get("http://localhost:3001/api/gallery");
    const mappedActivity = response.data.resp.map((act) => {
      return {
        image: act.galleryPicture,
        text: act.title,
        description: act.description,
      };
    });
    images.push(...mappedActivity);
    console.log(images);
  } catch (err) {
    console.log(err);
  }
}
getDailyAct();
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
