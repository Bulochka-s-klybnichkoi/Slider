var arrowL = document.getElementsByClassName("arrow-left")[0];
var arrowR = document.getElementsByClassName("arrow-right")[0];

var maxpiclength = 2000;
var picwidth = 1000;
var piclength = 0;
var prostinya = document.getElementsByClassName("prostinya")[0];


arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

updateBalls()

function next() {
   if (piclength === -maxpiclength) {
      piclength = 0;
   }
   else {
      piclength = piclength - picwidth;
   }
   prostinya.style.transform = `translateX(${piclength}px)`;
   prostinya.style.transition = "transform 500ms ease"
   updateBalls()
}

function previous() {
   if (piclength === 0) {
      piclength = -maxpiclength;
   }
   else {
      piclength = piclength + picwidth;
   }
   prostinya.style.transform = `translateX(${piclength}px)`;
   prostinya.style.transition = "transform 500ms ease"
   updateBalls()
}

var ball1 = document.getElementsByClassName("ball")[0]
var ball2 = document.getElementsByClassName("ball")[1]
var ball3 = document.getElementsByClassName("ball")[2]
var allBalls = document.querySelectorAll(".ball")

function passiveAllBalls() {
   ball1.classList.remove("active-ball");
   ball2.classList.remove("active-ball");
   ball3.classList.remove("active-ball");
}

function updateBalls() {
   if (piclength == 0) {
      passiveAllBalls()
      ball1.classList.add("active-ball");
   }

   else if (piclength == 1000) {
      passiveAllBalls()
      ball2.classList.add("active-ball");
   }

   else if (piclength == 2000) {
      passiveAllBalls()
      ball3.classList.add("active-ball");
   }
}