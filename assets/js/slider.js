var arrowL = document.getElementsByClassName("arrow-left")[0];
var arrowR = document.getElementsByClassName("arrow-right")[0];

var maxpiclength = 2000;
var picwidth = 1000;
var piclength = 0;
var prostinya = document.getElementsByClassName("prostinya")[0];


arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

function next() {
   if (piclength === -maxpiclength) {
      piclength = 0;
   }
   else {
      piclength = piclength - picwidth;
   }
   prostinya.style.transform = `translateX(${piclength}px)`;
   prostinya.style.transition = "transform 800ms ease"
   if (activeball == 1) {
      activeball = 2;
   }
   else if (activeball == 2) {
      activeball = 3;
   }
   else if (activeball == 3) {
      activeball = 1;
   }
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
   prostinya.style.transition = "transform 800ms ease"
   if (activeball == 3) {
      activeball = 2;
   }
   else if (activeball == 2) {
      activeball = 1;
   }
   else if (activeball == 1) {
      activeball = 3;
   }
   updateBalls()
}

// balls

var ball1 = document.getElementsByClassName("ball")[0];
var ball2 = document.getElementsByClassName("ball")[1];
var ball3 = document.getElementsByClassName("ball")[2];
var allBalls = document.getElementsByClassName("ball");
var ballsQuantity = allBalls.length - 1;

function updateBalls() {
   if (activeball == 1) {
      passiveBalls()
      ball1.classList.add("active-ball")
   }
   else if (activeball == 2) {
      passiveBalls()
      ball2.classList.add("active-ball")
   }
   else if (activeball == 3) {
      passiveBalls()
      ball3.classList.add("active-ball")
   }
}

function passiveBalls() {
   ball1.classList.remove("active-ball");
   ball2.classList.remove("active-ball");
   ball3.classList.remove("active-ball");
}
 
ball1.classList.add("active-ball");
var activeball = 1;