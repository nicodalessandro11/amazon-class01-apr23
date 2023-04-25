// JS Conditionals

// In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

// In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.

// In JavaScript, there are three forms of the if...else statement.
// 1. if statement
// 2. if...else statement
// 3. else...if statement

// -----------------------

//JS - IF Statement

// Syntax
// if (condition) {
//   // body del condicional if
// }

// Ejemplo - Condicionar si un numero es positivo!
// check if number is positive o mayor que0
//const number = prompt("Enter a number:    ");

// Proceder a condicionar este numero dentro de la variabe "number"
// if (number > 0) {
//   console.log("Este numero es positivo");
//   console.log(
//     "Es un caso condicional que solo estamos ejecutando una condicion"
//   );
// }

// -----------------------
// JS  - IF ELSE Statement
// Si un IF tiene un condicional opcional, podemos usar este condiconal opcional para ejecutar codigo en base que la condicion IF inicial sea falsa.
// Syntax
// if (condition) {
//     // body del condicional if
// } else {
//     // body del condicional else
// }

//const number2 = prompt("Enter a number: USING IF-ELSE:    ");

// Proceder a condicionar este numero dentro de la variabe "number"

// if (number2 > 0) {
//   console.log("Este numero es positivo");
//   console.log("Se cumple si el caso inicial es valido/positivo");
// } else {
//   console.log("Este numero es negativo");
//   console.log("Se cumple si el caso inicial NO es valido/positivo");
// }
// //Checking for 0 as well
// if (number2 >= 0) {
//   console.log("Este numero es positivo");
//   console.log("Se cumple si el caso inicial es valido/positivo");
// } else {
//   console.log("Este numero es negativo");
//   console.log("Se cumple si el caso inicial NO es valido/positivo");
// }

// -----------------------
//JS - ELSE IF Statement
// El condicional else if nos habilita la capacidad de condicionar +1(multiples) alternativas en base a las condiciones que queramos.
// Syntax - terminando con un else {}
// if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else {
// }

// Syntax - terminando sin un else {}
// if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// }

// Ejemplo - using else if
// Los seguratas!

// const drinkingAge = parseInt(
//   prompt("Hey do you want to buy alcohol? please show me your ID")
// );

// CONDITIONAL USING ELSE AT THE END
// if (drinkingAge < 18) {
//   console.log(
//     "Sorry kid, you are to young to enjoy this, go home please before we et into trouble..."
//   );
// } else if (drinkingAge === 18) {
//   console.log("Happy drinking age, what type of alcohol do you want?");
// } else if (drinkingAge > 18 && drinkingAge < 40) {
//   console.log("Enjoy your drink, just remember to drink one drink at a time!");
// } else {
//   console.log(
//     "Enjoy your drink, just remember that at this age the hangover is way too real!!! we offer paracetamol with our drinks :)"
//   );
// }
// CONDITIONAL USING ELSE-IF AT THE END TO DOUBLE CHECK THE AGE IS >= 40
// if (drinkingAge < 18) {
//   console.log(
//     "Sorry kid, you are to young to enjoy this, go home please before we et into trouble..."
//   );
// } else if (drinkingAge === 18) {
//   console.log("Happy drinking age, what type of alcohol do you want?");
// } else if (drinkingAge > 18 && drinkingAge < 40) {
//   console.log("Enjoy your drink, just remember to drink one drink at a time!");
// }
// else if (drinkingAge >= 40) {
//   console.log(
//     "Enjoy your drink, just remember that at this age the hangover is way too real!!! we offer paracetamol with our drinks :)"
//   );
// }

// ------------------------------
// NESTED - CONDICIONALES ADINADOS
// Podemos adinar condicionales dentro de condicionales si queremos :)

// const number = parseInt(prompt("Enter a number"));

// if (number >= 0) {
//   if (number === 0) {
//     console.log("the number is = to 0");
//   } else if (number >= 1 && number <= 3) {
//     console.log("the number is between 1 & 3");
//   } else {
//     console.log("the number is bigger than 3?");
//   }
// } else {
//   console.log("The number entered is a negative number");
// }

// ------------------------------
// REDUCIR UN POCO DE CODIGO
// Si tus condicionales son 50/50 (if else) puedes optar por una syntaxis mas limpias sin tener que agregar las {}

// ESTO PASA A
// if (number > 0) {
//     // ejecucion de este bloque de codigo
// } else {
//     // ejecucion de este bloque de codigo
// }
// ESTO
// if (number > 0) // ejecucion de este bloque de codigo
// else  // ejecucion de este bloque de codigo

// Example
// const number3 = parseInt(prompt("Enter a number between 1 & 2"));
// if (number3 === 1) console.log("You chose the number 1");
// else console.log("You chose another number.... get real... always be NUMBER 1");

// ------------------------------
// JS -  Switch Statement
// El statement "switch" evalúa una expresión y ejecuta el cuerpo correspondiente que coincide con el resultado de la expresión.

// Syntax:
// switch (variable / expression) {
//   case value1:
//     // ejecucion de este bloque de codigo 1
//     break;

//   case value2:
//     // ejecucion de este bloque de codigo 2
//     break;

//   case valueN:
//     // ejecucion de este bloque de codigo N
//     break;

//   default:
//   // ejecucion de este bloque de codigo default
// }
// El switch statement evalúa una variable/expresión entre paréntesis ().
// Si el resultado de la expresión es igual al valor1, se ejecuta su cuerpo.
// Si el resultado de la expresión es igual al valor2, se ejecuta su cuerpo.
// Este proceso continúa. Si no hay ningún caso que coincida, se ejecuta el cuerpo por defecto.

// IMPORTANTE:
// - El statement "break" es opcional.Si se encuentra el statement break, El switch statement switch termina.
// - Si no se utiliza el statement break, también se ejecutan los casos posteriores al caso coincidente.
// - "Default" por defecto también es opcional.

// SWITCH STATEMENT EXAMPLES
// Sin Type Checking - Example
let switchExampleOne = 2;
switch (switchExampleOne) {
  case 1:
    switchExampleOne = "One";
    break;
  case 2:
    switchExampleOne = "Two";
    break;
  default:
    switchExampleOne = "Number not found on this conditional.....";
    break;
}
//console.log(`The value is this variable is: ${switchExampleOne}`);

// Con type Checking - Example
let switchExampleTwo = 1;
switch (switchExampleTwo) {
  case "1":
    switchExampleTwo = "A string using the value of 1";
    break;
  case 1:
    switchExampleTwo = "A number with the value of 1";
    break;
  case 2:
    switchExampleTwo = "A number with the value of 2";
    break;
  default:
    switchExampleTwo = "Number not found on this conditional.....";
}
//console.log(`The value is this variable is: ${switchExampleTwo}`);

// let angelaTest = 100;
// switch (angelaTest) {
//   case angelaTest <= 100:
//     angelaTest = "This case in particular is less or equals to 100";
//     break;
//   default:
//     angelaTest = "Testing Purposes......";
//     break;
// }
// console.log(
//   `Test using a switch with specific coniditions inside each case: ${angelaTest}`
// );
// NOT WORKING -

// SWITCH EXAMPLE - CASOS MULTIPLES

//EXAMPLE 1 - COUNTRY EXAMPLE
//const countryOfOrigin = prompt("What country where you born?");
// switch (countryOfOrigin) {
//   case "Venezuela":
//   case "Argentina":
//   case "Ecuador":
//   case "Brazil":
//     alert(`Cool, ${countryOfOrigin} is located in south america`);
//     break;
//   case "Spain":
//   case "France":
//   case "Portugal":
//   case "Andorra":
//     alert(`Cool, ${countryOfOrigin} is located in Europe`);
//     break;
//   default:
//     alert("You are not from this earth.....");
// }

//EXAMPLE 2 - CALCULATOR EXAMPLE
// SWITCH EXAMPLE - CALCULATOR
// program for a simple calculator
// inicializamos una variable para poder asignarle un valor luego (operacion matematica)
// let result;

// Input del operando que el usuario va a usar  (x, +, -, /)
// const operator = prompt("Enter operator that you want to use (x, +, -, /):");

// 2 variables que tengan la capacidad de recibir los nums que el usuario va a "CALCULAR":
// const calcNumOne = parseFloat(prompt("Enter 1st number:"));
// const calcNumTwo = parseFloat(prompt("Enter 1st number:"));

// montemos switch statement
// switch (operator) {
//   case "+":
//     result = calcNumOne + calcNumTwo;
//     console.log(`${calcNumOne} + ${calcNumTwo} = ${result}`);
//     break;
//   case "-":
//     result = calcNumOne - calcNumTwo;
//     console.log(`${calcNumOne} - ${calcNumTwo} = ${result}`);
//     break;
//   case "*":
//     result = calcNumOne * calcNumTwo;
//     console.log(`${calcNumOne} * ${calcNumTwo} = ${result}`);
//     break;
//   case "/":
//     result = calcNumOne / calcNumTwo;
//     console.log(`${calcNumOne} / ${calcNumTwo} = ${result}`);
//     break;
//   default:
//     console.log(
//       "Invalid operator, please choose one of the following: (x, +, -, /)"
//     );
//     break;
// }

// CLASS EXCERCISES

// Excercise 001
// <= 5 - Gratis
// < 15 - tienes un 20%
// >= 15 y <=60 - pagan regular
//si el usuario +60 - tiene 40%

// DIEGO APPROACH ["IF-ELSE STATEMENT"]
// const age = parseInt(prompt("Welcome to Phenomena - How old are you?"));
// if (age <= 5) {
//   console.log("You are just a baby, you get in for free :)");
// } else if (age > 5 && age < 15) {
//   console.log("You fall under the age group that receives 20% discount");
// } else if (age >= 15 && age <= 60) {
//   console.log(
//     "You fall under the age group that does not get any discount sorry but you are in your prime years go work god damn it ! "
//   );
// } else if (age > 60) {
//   console.log("You fall under the age group that receives 40% discount");
// }

//GEMMA APPROACH ["IF-ELSE STATEMENT"]
// const age2 = parseInt(prompt("Enter your age2: "));
// if (age2 <= 5) {
//   console.log("Ticket free");
// } else if (age2 < 15) {
//   console.log("you have a 20% discount");
// } else if (age2 <= 60) {
//   console.log("Regular ticket");
// } else {
//   console.log("40 price discount");
// }

// ALEIX APPROACH ["SWITCH STATEMENT"]
// let precio = prompt("Cual es tu edad?");
// switch (true) {
//   case precio <= 5:
//     console.log("Ticket free");
//     break;
//   case precio > 5 && precio <= 15:
//     console.log("you have a 20% discount");
//     break;
//   case precio > 15 && precio <= 60:
//     console.log("Regular");
//     break;
//   case precio > 60:
//     console.log("you have a 40% discount");
//     break;
//   default:
//     console.log("Regular");
//     break;
// }

// GEMMA APPROACH WITH CALC OF TOTAL OF TICKETS
const ageThree = parseInt(prompt("Enter your ageThree: "));
let ticket = 10;
if (ageThree <= 5) {
  console.log("Ticket free");
} else if (ageThree < 15) {
  console.log(ticket * 0.8);
} else if (ageThree <= 60) {
  console.log(ticket);
} else {
  console.log(ticket * 0.6);
}

// Excercise 002
// Vamos a crear un switch statement para loguear distintos resultados segun los prompts que entre el usuario. Primero le daremos la opción de entrar su name, que nos guardaremos en una variable. Después le permitiremos entrar una action, que también guardaremos en una variable. Nos encargaremos de esta action y, según lo que el usuario entre, haremos console log de alguna cosa u otra.

// Si el usuario entra "greet", lo que vamos a loguear es "Hello, [name]!". Si el usuario entra "say bye", vamos a loguear "Bye bye, [name]!". Si el usuario entra "ask" loguearemos "How are you today, [name]?". Si entra "scream" vamos a loguear "AHHHHHHHH!!!!!!!". Si entra "rest" vamos a loguear "I'm signing off now.". En caso de que la action no sea ninguna de las anteriores, lo que loguearemos será: "I don't know how to do that yet, I'm just a little program :("

const userName = prompt("What's your name?");
const action = prompt("What type of action would you like to choose from:");

switch (action) {
  case "greet":
    console.log(`Hello, ${userName}`);
    break;
  case "say bye":
    console.log(`Bye bye, ${userName}`);
    break;
  case "ask":
    console.log(`How are you today, ${userName}`);
    break;
  case "scream":
    console.log(`AHHHHHHHHHHHHH!!!!!`);
    break;
  case "rest":
    console.log(`I'm signing off now.`);
    break;
  default:
    console.log(
      "I don't know how to do that yet, I'm just a little program :("
    );
    break;
}
