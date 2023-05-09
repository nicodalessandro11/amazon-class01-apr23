console.log("Hola");

// Facu Version
// let parent = document.getElementsByTagName("body")[0];
let parent = document.body;
let pTag = document.createElement("p");
//pTag.innerHTML = "Me gusta JS";
pTag.textContent = "Me gusta JS - Jorge";
console.log(pTag);
parent.appendChild(pTag);
