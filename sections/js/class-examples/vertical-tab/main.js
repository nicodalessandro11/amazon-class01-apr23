let button = document.getElementsByClassName("but");
let tabContent = document.getElementsByClassName("tab-content");

button[1].classList.add("active");
tabContent[1].style.display = "block";

let city = (e, city) => {
  let iterador = null;
  for (iterador = 0; iterador < button.length; iterador++) {
    tabContent[iterador].style.display = "none";
    button[iterador].classList.remove("active");
  }
  document.getElementById(city).style.display = "block";
  e.currentTarget.classList.add("active");
};
