var button = document.getElementsByClassName("header-search")[0];
var input = document.getElementsByClassName("header-field")[0];

function searchButton() {
   input.style.opacity = 1;
   input.style.cursor = "text";
}
button.addEventListener("click", searchButton);

var arrowL = document.getElementsByClassName("main-section3-slider-arrows-left")[0];
var arrowR = document.getElementsByClassName("main-section3-slider-arrows-right")[0];

var currentpic = document.querySelector(".main-section3-slider-img");
var currentpicid = 0;
var maxpicid = 2;



arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

function next() {
   if (currentpicid > maxpicid - 1) {
      currentpicid = 0;
   }
   else {
      currentpicid++;
   }
   currentpic.src = "assets/img/section3/slider" + currentpicid + ".jpg";
}

function previous() {
   if (currentpicid > 0) {
      currentpicid = currentpicid - 1;
   }
   else {
      currentpicid = maxpicid;
   }
   currentpic.src = "assets/img/section3/slider" + currentpicid + ".jpg";
}