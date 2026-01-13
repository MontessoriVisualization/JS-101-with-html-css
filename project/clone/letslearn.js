const dropdown = document.querySelector(".dropdown");
const NavEvent = document.querySelector(".nav-event");
NavEvent.addEventListener("mouseover", clickEvent);
function clickEvent() {
  dropdown.classList.remove("hidden");
}
NavEvent.addEventListener("mouseout", outEvent);
function outEvent() {
  dropdown.classList.add("hidden");
}

//ELemnets for hero image slider

const heroImages = document.querySelector(".hero-img");
let currentIndex = 0;
const images = [
  "https://letslearn.asia/wp-content/uploads/2025/10/ITtraininginstituteinnepal2.webp",
  "https://letslearn.asia/wp-content/uploads/2025/10/ITtraininginstituteinnepal.webp",
  "https://letslearn.asia/wp-content/uploads/2025/10/ITtraininginstituteinnepal3.webp",
];
setInterval(() => {
  heroImages.style.backgroundImage = `url("${images[currentIndex]}")`;
  currentIndex = (currentIndex + 1) % images.length; //gives constant value between 0 and length of array
}, 3000);

//2 images
//0%2=0
//1%2=1
//2%2=0
//3%2=1
//4%2=0
