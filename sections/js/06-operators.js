// Que es un operador?

// En JS, un operador es un symbolo especial que nos ayuda a ejecutar operaciones en operandos.
// Ejemplo:

const add = 2 + 3;
console.log(add);

// Aca cicos, el operador "+" es un symbolo matematico de operacion.  Caso de suma que te suma 2+3

// JS Tipo de Operadores
// Lista que aprenderemos hoy

// Assignment Operator
// Arithemic Operator
// Copmarison Operator
// Logical Operators
// Bitwise Operators
// String Operators
// Other Operators

// JS Assignment Operators
// Si miramos el ejemplo en la linea 6, el operador de asignacion "=" es lo que usamos para apuntar/asignar la operacion matematica con la variable "add"...

console.log("Assignment Operators");
console.table([
  {
    operator: "=",
    name: "Assignment operator",
    example: "a = 7; // 7",
  },
  {
    operator: "+=",
    name: "Addition operator",
    example: "a += 5; // a = a + 5",
  },
  {
    operator: "-=",
    name: "Subtraction Assignment",
    example: "a -= 2; // a = a - 2",
  },
  {
    operator: "*=",
    name: "Multiplication Assignment",
    example: "a *= 3; // a = a * 3",
  },
  {
    operator: "/=",
    name: "Division Assignment",
    example: "a /= 2; // a = a / 2",
  },
  {
    operator: "%=",
    name: "Remainder Assignment",
    example: "a %= 2; // a = a % 2",
  },
  {
    operator: "**=",
    name: "Exponentiation Assignment",
    example: "a **= 2; // a = a**2",
  },
]);

console.log("Arithemical Operators");
console.table([
  {
    operator: "+",
    name: "Add",
    example: "2+2 // 4",
  },
  {
    operator: "-",
    name: "Substract",
    example: "4-2 // 2",
  },
  {
    operator: "*",
    name: "Multiplication",
    example: "4 * 4 // 16",
  },
  {
    operator: "/",
    name: "Division",
    example: "3 /3 // 1",
  },
  {
    operator: "++",
    name: "Increment (increments by 1)",
    example: "4++ // 5",
  },
  {
    operator: "--",
    name: "Decrement (decrements by 1)",
    example: "4-- // 3",
  },
  {
    operator: "**",
    name: "Exponentiation (Power)",
    example: "2**2 // 8",
  },
]);

// JS Comparison Operators
// Operadores de comparasion, comparan dos tipos de valores o mas+ y te retornan un valor booleanico.
// Ejemplo

let number1 = 3;
let number2 = 2;

console.log("Comparing these 2 numbers");
console.log(number1 > number2);

console.log("Comparison Operators");
console.table([
  {
    operator: "==",
    description: "Equal to: returns true if the operands are equal",
    example: "x == y",
  },
  {
    operator: "!=",
    description: "Not equal to: returns true if the operands are not equal",
    example: "x != y",
  },
  {
    operator: "===",
    description:
      "Strict equal to: true if the operands are equal and of the same type",
    example: "x === y",
  },
  {
    operator: "!==",
    description:
      "Strict not equal to: true if the operands are equal but of different type or not equal at all",
    example: "x !== y",
  },
  {
    operator: ">",
    description:
      "Greater than: true if left operand is greater than the right operand",
    example: "x > y",
  },
  {
    operator: ">=",
    description:
      "Greater than or equal to: true if left operand is greater than or equal to the right operand",
    example: "x >= y",
  },
  {
    operator: "<",
    description:
      "Less than: true if the left operand is less than the right operand",
    example: "x < y",
  },
  {
    operator: "<=",
    description:
      "Less than or equal to: true if the left operand is less than or equal to the right operand",
    example: "x <= y",
  },
]);
// console.log(8 == 8);
// console.log(8 != 4);
// console.log(8 === "8");
// console.log(8 !== "8");
// console.log(4 > 2);
// console.log(4 < 2);
// console.log(2 >= 2);
// console.log(5 <= 9);

// JS Logical Operators
// Ejecutan operaciones logicas, que nos brindan ayuda para segmentar ciertas operaciones.

const numberA = 5;
const numberB = 3;

console.log(
  `The comparison of these numbers is: ${numberA < 6 && numberB < 5}`
);

console.log("Logical Operators");
console.table([
  {
    operator: "&&",
    description:
      "Logical AND: true if both the operands are true, else returns false",
    example: "x && y",
  },
  {
    operator: "||",
    description:
      "Logical OR: true if either of the operands is true; returns false if both are false",
    example: "x || y",
  },
  {
    operator: "!",
    description: "Logical NOT: true if the operand is false and vice-versa.	",
    example: "!x",
  },
]);

// Logical AND
console.log(true && true);
console.log(true && false);

// Logical OR
console.log(true || false);
console.log(false || false);

// Logical NOT
console.log(!true);

// Strings + operators...
// En js podemos usar algunos operadores para otras operaciones que no corresponden matematica y logica contextual...
console.log("Wu Tang Clan" + " is for the children");

//function to add two numbers
function miSuperCoolFunction(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3;
}

const miSuperCoolFunction2 = (numero1, numero2, numero3) => {
  return numero1 + numero2 + numero3;
};

console.log(miSuperCoolFunction(10, 5, 8));

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addTwoNumbers(4, 8));

// CLASS EXCERCISES
// Ejercicio 1:
// Declara una variable sin asignarle ningún valor. Después, en otra línea, asígnale un valor numérico. Finalmente, haz una reasignación para que a dicha variable se le sume 1. Haz esta reasignación de tres maneras distintas. Recuerda usar console.logs cada vez que quieras comprobar tu progreso.

let myVariable;
console.log(myVariable);
myVariable = 10;
console.log(myVariable);
//1st Variation
myVariable = myVariable + 1;
console.log(myVariable);
// 2nd Variation
myVariable += 1;
console.log(myVariable);
// 3rd Variation
myVariable++;
console.log(myVariable);

// Ejercicio 2:
// Declara dos variable, una con el valor 3 (number) y la otra con el valor "3" (string).
// Haz un console.log que compare si las dos son iguales y devuelva verdadero.
//Haz otro que las compare igual y devuelva falso.
// Haz lo mismo pero comprobando si NO son iguales.
// Haz un console.log que compruebe si la primera es mayor o igual que 7.
// Finalmente, haz un console.log que compruebe si las dos variables son estrictamente iguales O si la primera variable es menor o igual a 3.
const num = 3;
const string = "3";
// 1st Case
console.log(num == string);
//2nd Case
console.log(num === string);
//3rd Case
console.log(num !== string);
//4th
console.log(num >= 7);
//5th
console.log(num === string || num <= 3);
