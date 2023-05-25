// Iteration 1: Names and Input
let hackerOne = "Diego";
let hackerTwo = "Lionel";

// oldSSchool 001
// console.log("The driver's name is " + hackerOne);
// // using template literals ``
// console.log(`The driver's name is ${hackerOne}`);

// let hackerOneName = `The driver's name is ${hackerOne} `;
// let hackerTwoName = `The navigator's name is ${hackerTwo}`;
// console.log(hackerOneName);
// console.log(hackerTwoName);

// //Como podemos revisar el valor de longitud de una variable ?
// //podemos usar la propieda "length"
// // console.log(hackerOne.length);

// // // Iteration 2: Conditionals
// // if (hackerOne.length > hackerTwo.length) {
// //   console.log(
// //     `The driver has the longest name, it has ${hackerOne.length} characters. `
// //   );
// // } else if (hackerOne.length < hackerTwo.length) {
// //   console.log(
// //     `The navigator has the longest name, it has ${hackerTwo.length} characters. `
// //   );
// // } else {
// //   console.log(
// //     `Wow, both of you have equally long names, both names have ${hackerOne.length} amount of characters`
// //   );
// // }

// // // TERNARY OPERATORS
// // //SYNTAX INICIAL RELACIONADO AL EJERCICIO - 50/50 - Ternary
// // hackerOne.length > hackerTwo.length ? "" : "";

// // console.log("Using Ternary Operators - 50/50 dos condiciones");
// // hackerOne.length > hackerTwo.length
// //   ? console.log(
// //       `The driver has the longest name, it has ${hackerOne.length} characters. `
// //     )
// //   : console.log(
// //       `The navigator has the longest name, it has ${hackerTwo.length} characters`
// //     );

// // console.log("Using Ternary Operators - 50/50 - 2+ condiciones");
// // hackerOne.length > hackerTwo.length
// //   ? console.log(`hackerone tiene mas chars`)
// //   : hackerOne.length === hackerTwo.length
// //   ? console.log(`los dos tienen el mismo nombre`)
// //   : console.log(`hackertwo tiene mas chars`);

// // // Iteration 3: Loops
// // console.log("-----------------");
// // console.log("Iteration 003 - Loops");
// // let favCountries = ["España", "USA", "Italia", "Suecia"];

// // // FUNCION NOMBRADA CON EL SYNTAX PRE ECMA SCRIPT006
// // function david() {
// //   console.log("Hola David");
// // }
// // david();
// // // FUNCION TIPO FLECHA  NOMBRADA CON EL SYNTAX POST ECMA SCRIPT006
// // // PODEMOS GUARDAR UNA FUNCION DENTRO DE UNA VARIABLE
// // let davidTwo = () => {
// //   console.log("Hola David - tipo flecha");
// // };
// // davidTwo();

// // //forEach(() => {});

// // favCountries.forEach((country) => {
// //   console.log(`Me gusta mucho el pais ${country}`);
// // });
// // console.log(favCountries);

// // let student = "Facundo";
// // let newName = "";

// // // USING A FOR LOOP - BUCLEANDO CON METODO NATIVO DE JS DE ITERACION
// // for (let indice = 0; indice < student.length; indice++) {
// //   newName += student[indice].toUpperCase() + " ";
// // }
// // console.log(newName);

// // //console.log(student.split("").join(" ").toUpperCase());
// // //console.log(student.split("").reverse().join(" ").toUpperCase());

// // // USING A NATIVE METHOD
// // let fruits = ["apples", "oranges", "bananas", 21, false];
// // let studentObject = {
// //   name: "Diego",
// //   Age: 31,
// // };

// // // { } === OBJETO
// // // [] === ARRAY

// // // for (const student of studentObject.length) {
// // //   console.log(srudne);
// // // }

// // const data = [
// //   { name: "Diego", age: 31, group: "A" },
// //   { name: "Jarko", age: 25, group: "B" },
// //   { name: "Aleix", age: 20, group: "A" },
// //   { name: "Marcos", age: 15, group: "C" },
// //   { name: "Octavio", age: 25, group: "B" },
// // ];
// // console.log("Let's print the ages:");
// // for (let i = 0; i < data.length; i++) {
// //   console.log(`-. ${data[i].name}`);
// //   console.log(`-. ${data[i].age}`);
// //   console.log(`-. ${data[i].group}`);
// // }

// Usando un split, reverse, join + toUpercae sin necesidad de tener que loopear :)
let reversedNameTwo = hackerOne.split("").reverse("").join().toUpperCase();
console.log(reversedNameTwo);

///// USING SIMPLE LOOP
let reversedName = "";
for (let i = 0; i < hackerOne.length; i++) {
  reversedName += hackerOne[i].toUpperCase() + " ";
}
console.log(reversedName);

//Usando una funcion que recibe un parametro para poder efectuar logica de sploit, reverse, join
const reverseString = (stringVariable) =>
  stringVariable.split("").reverse("").join();
console.log(reverseString(reversedName));

// Usando un bucle conjuntoi a un -1
let deletreadoReverse1 = "";
for (let index = hackerOne.length - 1; index >= 0; index--) {
  deletreadoReverse1 += hackerOne[index].toUpperCase() + " ";
}
console.log(deletreadoReverse1);

let ordenLexico = [hackerOne, hackerTwo];

ordenLexico.sort((nombreUno, nombreDos) => {
  if (nombreUno === nombreDos) {
    return console.log(`¿Qué? ¿Los dos tienen el mismo nombre?`);
  } else if (nombreUno > nombreDos) {
    return console.log(`El nombre del conductor va primero.`);
  } else {
    console.log(`Yo, el navegador va primero definitivamente.`);
  }
  //return console.log(`Yo, el navegador va primero definitivamente.`);
});

if (hackerOne === hackerTwo) {
  console.log(`¿Qué? ¿Los dos tienen el mismo nombre?`);
} else if (hackerOne > hackerTwo) {
  console.log(`El nombre del conductor va primero.`);
} else {
  console.log(`Yo, el navegador va primero definitivamente.`);
}
