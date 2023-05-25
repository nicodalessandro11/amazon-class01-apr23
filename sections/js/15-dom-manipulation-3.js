console.log("Hello");

let ejemplo = document.querySelector(".ejemplo");
//console.log(ejemplo);

// Añadir classes
// add()

ejemplo.classList.add("mi-cool-clase-1");
//console.log(ejemplo);

ejemplo.classList.add("mi-cool-clase-1", "clase-3", "clase-4");
//console.log(ejemplo);

// Añadir Estilos
//.style
//ejemplo.style.color = "red";

// multiplesestilos
// cssText
ejemplo.style.cssText = "color: orange; font-size: 40px";

// Dependencia de metodo
// 2 params
// 1 param  - viene siendo la propiedad de estilop que quieres usar
// 2 param - el valor de la propiedad que estas usando!
ejemplo.style.setProperty("background", "red");

// CS CLASES
// SET Attribute
let ejemploSetAt = document.querySelector(".set-attribute");
console.log(ejemploSetAt);

ejemploSetAt.setAttribute("class", "ejemplo-set-attribute-clase");

ejemploSetAt.setAttribute("id", "ejemplo-id-set-attribute");
console.log(ejemploSetAt);

ejemploSetAt.setAttribute("data-id", "123");
