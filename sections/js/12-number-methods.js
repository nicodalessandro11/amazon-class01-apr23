console.log("Number Methods Class:");

// Number methods y notación numérica

//Hay 3 formas de escribir números. Veamoslas usando el número 100 como ejemplo
//Normal
let numOne = 100; // 100
console.log(numOne);
//Hexadecimal
let numTwo = 0x64; // 100
console.log(numTwo);
//Exponencial
let numThree = 1e2; // 100
console.log(numThree);

// USEMOS ESTA VARIABLE COMO EJEMPLO
let number = 1000.2222222222222;
console.log("------------- VARIABLE COMO EJEMPLO");
console.log(number);

// 1. Number()
// Number, convierte un string en un Number
console.log("-------------  Number()");
console.log(Number("2"));
console.log(typeof Number("2"));

// 2. toExponential()
// Convierte un número a base exponencial 10. Si se introduce un parámetro habrá tantos decimales como el parámetro introducido.
console.log("------------- toExponential()");
console.log(number.toExponential());
console.log(number.toExponential(4));

// 3. toFixed
// Pone tantos decimales de un número como valor haya en el toFixed. Si no hay nada o es 0, no pone decimales.
console.log("------------- toFixed");
console.log(number.toFixed(0));
console.log(number.toFixed());
console.log(number.toFixed(2));

// 4. toPrecision()
// Pone todos los decimales de un número
console.log("------------- toPrecision");
console.log(number.toPrecision(2));

// 5. valueOf()
//Si tienes un objeto pero quieres convertirlo a su valor numérico puedes usar .valueOf(). No deberías usar este método si no es para convertir un dato.
console.log("------------- valueOf");
let number2 = {
  x: "10",
  y: "20",
};
console.log((number2.x + number2.y).valueOf());
let testVariable = (number2.x + number2.y).valueOf();
console.log(typeof testVariable);

// 6. toString()
// Si quieres convertir un número a string usa el método .toString()
console.log("------------- toString");
console.log(number.toString());
console.log(typeof number.toString());

// ---------------- EJERCICIOS ----------------

/*Ejercicio 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. 
Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?
*/

/*Ejercicio 2
En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000ff sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff. 
*/
