// let headerImages = [
//   "images/header-img1.jpg",
//   "images/header-img2.jpg",
//   "images/header-img3.jpg",
// ];
// let i = 0;
// function mySlider() {
//   document.querySelector(".header-img").src = headerImages[i];
//   if (i < headerImages.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout("mySlider()", 5000);
// }
// mySlider();

let list = document.querySelector(".list");
let menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  console.log("hi");
  list.classList.toggle("active");
});
