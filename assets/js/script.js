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



arrowL.addEventListener("click", previous);

function previous() {
   console.log("ауууууу а ну ладно")
   // currentpicid = currentpicid + 1;
   currentpic.scr = "http://127.0.0.1:5500/assets/img/section3/slider1.jpg";
}