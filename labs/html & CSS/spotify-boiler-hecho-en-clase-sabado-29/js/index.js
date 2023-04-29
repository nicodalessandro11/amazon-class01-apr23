// console.log("Hola chicos");

// DOM SELECTION || DOM MANIPULATION
let headerBackgroundColor = document.querySelector(".navigation");
let greenLogo = document.querySelector(".logo-green");
let whiteLogo = document.querySelector(".logo-white");

// verificamos que este funcionando bien nuestra logice de arriba
console.log(headerBackgroundColor);
console.log(greenLogo);

// Algoritima para poder manipular esta variable
window.onscroll = function () {
  //   alert("I have been scrolled");
  let scroll = window.pageYOffset;
  if (scroll > 600) {
    headerBackgroundColor.classList.add("javascript-example");
    greenLogo.classList.add("hide-img");
    whiteLogo.classList.remove("hide-img");
  } else {
    headerBackgroundColor.classList.remove("javascript-example");
    greenLogo.classList.remove("hide-img");
    whiteLogo.classList.add("hide-img");
  }
};
