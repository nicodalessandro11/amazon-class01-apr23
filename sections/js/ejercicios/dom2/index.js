// Ejercicio 1. Cambio de innerText.
// Creamos un <h1> con un texto de "Todavía no me han modificado". Debajo creamos un botón que contenga el texto que queráis ("Click me", por ejemplo).
// Después tendremos que generar un evento de click. Cuando el user clique el botón, lo que haremos es que vamos a modificar el texto del <h1> de tal manera que sea "Ya me han dado click!".

const parentEl = document.querySelector("#ejParentEl");
let toBeModified = document.querySelector("#ej1h1");
let toBeBool = false;
const btnEl = document.querySelector("#ej1Btn");
let newEl = document.createElement("h1");

// btnEl.addEventListener("click", function () {
//   newEl.innerText = "Ya me han dado click";
//   parentEl.replaceChild(newEl, toBeModified);
// });

// Ejercicio 001 - Usando Condicional + xdependencia de un booleano.
btnEl.onclick = () => {
  // cambiamos el valor del boleano apuntando al Valor OPUESTO del mismo
  toBeBool = !toBeBool;
  console.log(toBeBool);
  // Condicionar en base al valor del booleano :)
  if (toBeBool) {
    toBeModified.innerText = "Ya me han dado click!";
  } else {
    toBeModified.innerText = "Todavia no me han modificado";
  }
};

// Ejercicio 001 - Usando Condicional + xdependencia de un booleano.
// btnEl.onclick = () => {
//   // Condicionar en base al valor del booleano que contiene una logica que ejecuta el cambio de valor de la variable toBeBool :)
//   if ((toBeBool = !toBeBool)) {
//     toBeModified.innerText = "Ya me han dado click!";
//   } else {
//     toBeModified.innerText = "Todavia no me han modificado";
//   }
// };
// Ejercicio 001 - Juli
// btnEl.onclick = () => {
//   // Enfoque de Juli
//   newEl.innerText = "Ya me han dado click";
//   parentEl.replaceChild(newEl, toBeModified);
// };

// Ejercicio 001 - Diego
// btnEl.onclick = () => {
//   toBeModified.innerText = "Ya me han dado click!";
// };

// Ejercicio 001 - Jonatahan Version
// let cuerpo = document.body;
// let title = document.createElement("h1");
// document.body.appendChild(title);
// title.innerText = "Todavia no me han modificado - Jonatahn ";
// let boton = document.createElement("button");
// document.body.appendChild(boton);
// boton.textContent = "Click me";

// function cambiaTitulo(titulo) {
//   title.innerText = "Ya me han dado click!";
// }
// boton.addEventListener("click", cambiaTitulo);

// Ejercicio 001 - Emilio Version
// const boton1 = document.querySelector("#miBoton");
// const h1 = document.querySelector("#miH1");
// h1.innerText = `Todavia no me han modificado - Emilio`;
// boton1.innerText = `Click`;
// boton1.style.backgroundColor = "white";
// boton1.style.fontSize = "32px";
// boton1.style.borderRadius = "8px";
// let modificado = false;
// boton1.addEventListener("click", function () {
//   if (modificado) {
//     h1.innerText = "Todavía no me han modificado";
//     boton1.style.backgroundColor = "white";
//     boton1.style.fontSize = "32px";
//     boton1.style.borderRadius = "8px";
//     modificado = false;
//   } else {
//     h1.innerText = "Ya me han dado click!";
//     boton1.style.backgroundColor = "red";
//     boton1.style.fontSize = "32px";
//     modificado = true;
//   }
// });

// Ejercicio 2. Toggle.
// Imaginemos que tenemos un pequeño aparato que se puede encender y apagar con un botón.
// Vamos a crear un <h1> que contendrá el texto "OFF". Debajo colocaremos un botón que contenga el texto "encender". De momento nuestro aparato está apagado.
// A continuación vamos a crear un event listener de click, de tal manera que, cuando el user lo clique, cambie el texto de 'OFF' a 'ON' y el texto del botón de 'encender' a 'apagar'. Esto nos permitiría encender nuestro aparato imaginario, pero también deberemos asegurarnos que, con el mismo evento de click, podemos apagarlo (es decir, volver a setear el valor del <h1> a 'OFF' y el del botón a 'encender').

let ejDosh1 = document.querySelector("#miH1");
let ejDosBtn = document.querySelector("#miBoton");
let ejDosBool = false;
// Ejercicio 002 - Usando Condicionales Normales
// ejDosBtn.onclick = () => {
//   // 1ra parte
//   ejDosBool = !ejDosBool;
//   // 2da parte
//   if (!ejDosBool) {
//     ejDosh1.innerText = `ON`;
//     ejDosBtn.innerText = `Apagar`;
//   } else {
//     ejDosh1.innerText = `OFF`;
//     ejDosBtn.innerText = `Encender`;
//   }
// };
// Ejercicio 002 - Usando un SWITCH
ejDosBtn.onclick = () => {
  ejDosBool = !ejDosBool;
  // swtich()
  switch (ejDosBool) {
    case true:
      ejDosh1.innerText = `ON`;
      ejDosBtn.innerText = `Apagar`;
      break;
    case false:
      ejDosh1.innerText = `OFF`;
      ejDosBtn.innerText = `Encender`;
      break;
  }
};

// Usando un switch statement en base a un string
// let leyenda = "Camaron de la Isla";
// switch (leyenda) {
//   case "Jimmy Hendrix":
//     console.log("Es una leyenda del rock ");
//     break;
//   case "Bad Bunny":
//     console.log("Se esta convirtiendo en una leyenda del Reggeaton");
//     break;
//   case "Camaron de la Isla":
//     console.log(
//       "Este es el papa de los helados del flamenco y la musica gitana"
//     );
//     break;
// }

// Ejercicio 3. Contador.
// Vamos a crear un pequeño contador que sume y reste valores. Primero crearemos un <h1> con un valor inicial de '0'. Después crearemos CUATRO botones: el primero será "Doble click -2", el segundo "Click -1", el tercero "Click +1" y el cuarto "Doble click +2".
// Lo que queremos de estos cuatro botones es que modifiquen el valor del <h1> según como se especifica. Es decir, tendremos dos botones con un evento de doble click que restaran y sumarán 2 al resultado del <h1>, así como otros dos botones con un evento de click que sumarán y restarán 1 al resultado.
// HINT: Recordad que todos los valores dentro de un tag de HTML son cadenas de texto.
let menosDos = document.querySelector("#menosDos");
let menosUno = document.querySelector("#menosUno");
let masUno = document.querySelector("#masUno");
let masDos = document.querySelector("#masDos");
let cuenta = document.querySelector("#cuenta");

menosDos.ondblclick = () => {
  cuenta.innerText = parseInt(cuenta.innerText) - 2;
};
masDos.ondblclick = () => {
  cuenta.innerText = parseInt(cuenta.innerText) + 2;
};
menosUno.onclick = () => {
  cuenta.innerText = parseInt(cuenta.innerText) - 1;
};
masUno.onclick = () => {
  cuenta.innerText = parseInt(cuenta.innerText) + 1;
};

// Ejercicio 4. Class Toggle
// Creamos un botón que tenga una clase "green" y un texto como 'I'm green'.
// Cuando el user dé click al botón, deberíamos cambiar el texto del botón por 'I'm red' y su color para que sea rojo.
// Cuando el botón sea rojo y el user le vuelva a dar, deberíamos volver a setearlo a su estado inicial.
let ej4Btn = document.querySelector("#ejCuatroBtn");
ej4Btn.onclick = () => {
  if (ej4Btn.innerText === "Soy Verde") {
    ej4Btn.innerText = `Soy Rojo`;
    ej4Btn.classList.toggle("roja");
  } else {
    ej4Btn.innerText = `Soy Verde`;
    ej4Btn.classList.toggle("roja");
  }
};

// Ejercicio 5. Añadir a listas con inputs - ADVANCED
// Vamos a crear una ordered list que no contenga ningún elemento. Después creamos un input y un botón que contenga el texto "Añadir".
// Cuando el user escriba alguna cosa en el input y le dé a añadir, lo que deberíamos hacer es coger el valor de ese input y añadirlo a nuestra ordered list.
// Bonus: En caso de que el input esté vacío, deberíamos asegurarnos que no se añade una empty string a la lista, y que por ejemplo el input pase a tener un placeholder de 'Por favor, añade un elemento'
