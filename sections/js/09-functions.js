console.log("Functions Class:");

// JS Funciones

// Funcion JavaScript y expresiones de función

// JS - Function
// Una función es un bloque de código que realiza una tarea específica.

// Supongamos que necesitas crear un programa para crear un círculo y colorearlo. Puedes crear dos funciones para resolver este problema:

// una función para dibujar el círculo
// una función para colorear el círculo
// Dividir un problema complejo en trozos más pequeños hace que tu programa sea fácil de entender y reutilizable.

// Además, JavaScript cuenta con un gran número de funciones incorporadas(methods).
//Por ejemplo, Math.sqrt() es una función para calcular la raíz cuadrada de un número.

// Ventajas de utilizar una función
// - La función hace que el código sea reutilizable. Se puede declarar una vez y utilizarla varias veces.
// - La función hace que el programa sea más fácil ya que cada pequeña tarea se divide en una función.
// - La función aumenta la legibilidad.
// IMPORTANTE - Cuando se pasa un valor al declarar una función, se llama parámetro. Y cuando se llama a la función, el valor pasado se llama CALLBACKS!.

// PARAMETRO DEFINTION:
// En JavaScript, un parámetro es una variable que se utiliza en una función para contener un valor que se pasa a la función cuando se llama. Piensa en él como un marcador de posición para un valor desconocido que la función utilizará para realizar sus tareas.

// DECLARANDO FUNCIONES

// SIN PARAMS
//Declarar una función
// SYNTAX
// function nameOfFunction() {
//     // function body
// }
// nameOfFunction()

// CON PARAMS
//Declarar una función
// SYNTAX
// Una función también puede declararse con parámetros. Un parámetro es un valor que se pasa al declarar una función.
// function nameOfFunction(parameter, parameterTwo,) {
//     // function body
//  return paramter  + parameter2
// }
// nameOfFunction(numero1, numero2)

// - Una función se declara utilizando la palabra clave function.
// - Las reglas básicas para nombrar una función son similares a las de nombrar una variable. Es mejor escribir un nombre descriptivo para su función. Por ejemplo, si una función se utiliza para sumar dos números, podría nombrar la función add o addNumbers.
// - El cuerpo de la función se escribe dentro de {}.
// Para utilizar esa función, tenemos que llamarla. nameOfFunction()
// PARAMS === parametros :)

console.log("-------------------");
console.log("Simple Function:");

// Example 1 - Sin params
function greet() {
  console.log("Hola mis panas!");
}
//greet();

// Example 2  - Con params
function greetWithParams(tortilla) {
  console.log(`Hola ${tortilla}`);
}
// Using a simple variable holding a string
let myName = "Diego Zito";
let myStudentName = "Ruben Garcia";
// Using a more complex variable using a window method called prompt, to ask the user for a "name".
//let userName = prompt("Please, enter your name:");

// greetWithParams(userName);
// greetWithParams(myName);
// greetWithParams(myStudentName);

// Example 3 - Con mas de 1 parametro
function addTwoNumbers(numeroUno, elvisCrespo) {
  console.log(`El total de esta suma es de : ${numeroUno + elvisCrespo}`);
}
let numberOne = 20;
let numberTwo = 30;
// addTwoNumbers(numberOne, numberTwo);
// addTwoNumbers(20, 30);
// addTwoNumbers(40, 30);
// addTwoNumbers(20, 50);
// addTwoNumbers(20, 80);
// addTwoNumbers("Manuel", " es bostero");

console.log("-------------------");
console.log("Functions using keyword return:");
// DECLARAR FUNCIONES CON RETURN
// - El return statement puede utilizarse para devolver el valor a una llamada a una función.
// - El return statement indica que la función ha terminado. Cualquier código después del return no se ejecuta.
// - Si no se devuelve nada, la función devuelve un valor indefinido.
// - Funciones tipo flecha que contengan las {} por defecto esperan el keyword return

// Function using multiple params + return statement - ADD TWO NUMS
function addWithReturn(numero1, numero2) {
  return numero1 + numero2;
}
// let returnNumberOne = parseFloat(prompt("Input first number: "));
// let returnNumberTwo = parseFloat(prompt("Input second number: "));
// let operationResult = addWithReturn(returnNumberOne, returnNumberTwo);

// alert(
//   `The total sum of these two numbers using a function that handles the return statement is:  ${operationResult}`
// );

// Function using multiple params + return statement - MULTIPLY 3 NUMS
function addWithReturnMultiply(numero1, numero2, numero3) {
  return numero1 * numero2 * numero3;
}
// let returnMultiplyNumberOne = parseFloat(prompt("Input first number: "));
// let returnMultiplyNumberTwo = parseFloat(prompt("Input second number: "));
// let returnMultiplyNumberThree = parseFloat(prompt("Input third number: "));
// let operationMultiplyResult = addWithReturnMultiply(
//   returnMultiplyNumberOne,
//   returnMultiplyNumberTwo,
//   returnMultiplyNumberThree
// );

// alert(
//   `The total sum of these two numbers using a function that handles the return statement is:  ${operationMultiplyResult}`
// );
// console.log(
//   `The total sum of these two numbers using a function that handles the return statement is:  ${operationMultiplyResult}`
// );

console.log("-------------------");
// ARROW FUNCTIONS

// DEFINTION:
// La función de flecha es una de las características introducidas en la versión ES6 de JavaScript. Permite crear funciones de una manera más limpia en comparación con las funciones normales. Y nos deja crear funciones dentro de variables.

// Por ejemplo,

function exampleFunctionOldSchool(x, y) {
  return x + y;
}

// let o const para guardar funciones dentro de variables :)
let exampleFunctionArrowOne = (x, y) => {
  return x + y;
};
//console.log(exampleFunctionArrowOne(4, 8));

// SI SOLO TENEMOS UNA LINEA DE CODIGO DENTRO DEL BODY PODEMOS AHORRARNOS LOS CLAUDETES + NOS DESPRENDEMOS DE LA PALABRA "RETURN".
let exampleFunctionArrowTwo = (x, y) => x + y;
//console.log(exampleFunctionArrowTwo(10, 50));

// SYNTAX DE UNA FUNCION TIPO FLECHA
// let myFunction = (arg1, arg2, arg3, arg#) => {
//    statement(s) -  body of arrow function
// }
// declaramos la funcion mediante palabra reservada "let" para guardar funcion dentro de variable
// myFunction es el nombre de la función
// arg1, arg2 , arg3, arg# son los argumentos de la función
// statement(s) es el cuerpo de la función

// Ejemplo - Arrow Function - Sin params
let noArguments = () => console.log("Hello");
//noArguments();

// Ejemplo - Arrow Function - Con Params
let oneArgument = (fiveGuys) => console.log(`Hello ${fiveGuys}`);
//oneArgument("Michael Jordan");

// Ejemplo - Arrow Function - FUNCION ANONIMA - NO TIENE NOMBRE FOR DEFINICION Y SE AUTOEJECUTA - ESTA AUTOEJECUCION LA ASOSIAREMOS A UNA CONDICIONAL - MEDIANTE EL TERNARIO :)
let age = 10;
//let promptAge = parseInt(prompt("Tell me your age"));
let welcomeTwo = age <= 21 ? "" : "";
// let welcome =
//   promptAge <= 21
//     ? () =>
//         alert(
//           "Eres muy joven para formar parte de esta banda, por favor ve a educarte con Miles Davis"
//         )
//     : () =>
//         alert(
//           "Perfecto conoces a Miles Davis, John Coltrane, Chet Baker, Benito 'Bad Bunny' Martinez Ocasio "
//         );
//welcome();

// Ejemplo - Arrow Function - Params Multiple - Return Statement
let sumTwoNumbers = (numberOne, numberTwo) => {
  let myName = "Diego Zito";
  let myAge = 31;
  let resultOfSum = numberOne + numberTwo;
  return resultOfSum;
};
let resultOfSumTwoNumbers = sumTwoNumbers(80, 360);
//console.log(resultOfSumTwoNumbers);

// ...
// ...
// EJERCICIO #1
// ...
// ...
// ...
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".
//Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));
//console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));

// Version 001 - Class
const functionExcerciseOne = (name, age, livesIn) => {
  if (livesIn.livesInCity) return `${name} tiene ${age} y vive en la ciudad.`;
  else return `${name} tiene ${age} y vive en un pueblo`;
};
console.log("Simple Conditionals mixed with return");
console.log(
  functionExcerciseOne("Martina", 42, { livesInCity: true, livesInTown: true })
);

// Version 002 - Ternary Simplified - Return statement
const arrFuncTernaryOne = (name, age, livesIn) => {
  return livesIn.livesInCity
    ? `${name} tiene ${age} y vive en la ciudad.`
    : `${name} tiene ${age} y vive en un pueblo`;
};
console.log("Return");
console.log(
  arrFuncTernaryOne("Martina", 42, { livesInCity: true, livesInTown: true })
);

// Version 003 - Ternary Simplified - NO return statement
const arrFuncTernaryTwo = (name, age, livesIn) =>
  livesIn.livesInCity
    ? `${name} tiene ${age} y vive en la ciudad.`
    : `${name} tiene ${age} y vive en un pueblo`;

console.log("No Return");
console.log(
  arrFuncTernaryTwo("Martina", 42, { livesInCity: true, livesInTown: true })
);

// Version 004 - Alvaro
const bioCheck = (firstName, age, livesIn) => {
  return `${firstName} tiene ${age} años y vive en ${
    livesIn.livesInCity ? "la ciudad" : "el pueblo"
  }`;
};
console.log("Alvaro");
console.log(bioCheck("Martina", 42, { livesInCity: true, livesInTown: true }));

// Version 005 - Ikerne
const personalInfo2 = (name, age, livesIn) => {
  let location = livesIn.livesInCity ? "a ciudad" : " pueblo";
  return `${name} tiene ${age} años y vive en un${location}.`;
};
console.log("Ikerne");
console.log(
  personalInfo2("Martina", 42, { livesInCity: true, livesInTown: true })
);
