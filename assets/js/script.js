var button = document.getElementsByClassName("header-search")[0];
var input = document.getElementsByClassName("header-field")[0];

function searchButton() {
   input.style.opacity = 1;
   input.style.cursor = "text";
}
button.addEventListener("click", searchButton);