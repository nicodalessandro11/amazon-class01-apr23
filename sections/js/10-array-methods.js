console.log("Array Methods Class - JS");
// Array Methods
// En JavaScript, un array es una estructura de datos que contiene una lista de elementos que almacenan múltiples valores en una sola variable. La fuerza de los js arrays reside en los métodos de los arrays. Los Array methodss o métodos de matrices son funciones incorporadas a JavaScript que podemos aplicar a nuestros arrays - Cada método tiene una función única que realiza un cambio o cálculo a nuestro array y nos ahorra escribir funciones comunes desde cero.

// JS Array Methods
// Para facilitar la manipulación de arrays en JavaScript, debemos utilizar métodos de arrays para facilitar nuestro trabajo y hacer el código más limpio.

// 1. map()
// Este método crea un nuevo array con los resultados a llamar a una función proporcionada en cada elemento de este array.
// Ejemplo 1
const arr = [1, 2, 3, 4, 5, 1];
const animals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];
const mapped = arr.map((arrayElement) => arrayElement + 10);
//console.table(mapped);
//console.table(mapped[3]);
//console.table(arr);

// Ejemplo 2
const newAnimalArray = animals.map((animalsPerArray) => {
  let storage = animalsPerArray;
  //console.log(storage);
  //console.table(storage);
  return storage;
});

// 2. filter()
// Este método crea un nuevo array con sólo los elementos que pasan la condición dentro de la función proporcionada.
const usingFilterMethod = arr.filter((arrayElement) => {
  return arrayElement === 2 || arrayElement === 4;
});
//console.table(usingFilterMethod);
//console.table(arr);

const usingFilterAnimals = animals.filter(
  (animalPerArray) =>
    animalPerArray === "cheetah" || animalPerArray === "parrot"
);
console.table(usingFilterAnimals);
console.table(animals);

// 3. sort()
// Este método se utiliza para ordenar los elementos del array en orden ascendente o descendente.
const alphabet = ["f", "a", "a", "c", "v", "z", "a", "A", "Z"];
// ascending/ascendente
let ascend = alphabet.sort((numOne, numTwo) => {
  return numOne > numTwo ? 1 : -1;
});
console.log(ascend);
// descending/descendente
let descend = alphabet.sort((numOne, numTwo) => {
  return numOne > numTwo ? -1 : 1;
});
console.log(descend);

// 4. forEach()
// Este método ayuda a realizar un bucle sobre un array ejecutando una función de devolución de llamada proporcionada(CALLBACK) para cada elemento de un array.
let usingForEach = alphabet.forEach((eachLetterParameter) =>
  console.log(eachLetterParameter)
);

// 5. concat()
// Este método se utiliza para fusionar dos o más matrices y devuelve una nueva matriz, sin cambiar las matrices existentes.
const arr1 = ["milan", "tokyo"];
const arr2 = ["miami", "chicago"];
const arr3 = ["london", "helsinki"];
let usingConcat = arr1.concat(arr2, arr3);
console.log(usingConcat);

// 6. every()
// Este método comprueba cada elemento de la matriz que pasa la condición, devolviendo true o false según corresponda.
const everyArr = [2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 200, -3, 3, 4, 5, 57, 38];
const biggerThanFive = [6, 7, 8, 9, 10];
// Ejemplo - todos los elementos del array "everyArr" que sean >5
let greaterThanFive = biggerThanFive.every((number) => {
  return number > 5;
});
let lessThanFive = everyArr.every((number) => {
  return number > 5;
});
console.log(greaterThanFive);
console.log(lessThanFive);

// 7. some()
// Este método comprueba si al menos un elemento de la matriz que pasa la condición, devolviendo true o false según corresponda.
// al menos que un elemento es >5?
const greaterFiveSome = everyArr.some((num) => num > 5);
console.log(greaterFiveSome);
// al menos que un elemento sea <= 0
const lessNum = biggerThanFive.some((num) => num <= 0);
console.log(lessNum);

// 8. includes()
// Este método comprueba si un array incluye el elemento que pasa la condición, devolviendo true o false según corresponda.
const includesTwo = everyArr.includes(200);
console.log(includesTwo);

// 9. join()
//Este método devuelve una nuevo string concatenando todos los elementos del array separados por el separador especificado.
const joinArray = ["C", ".", "R", ".", "E", ".", "A", ".", "M"];
console.log(joinArray.join(""));

// 10. push()
// Este método añade uno o más elementos al final del array y devuelve la nueva longitud del mismo.
const pushAnimals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];
let myNewArrayOfAnimals = pushAnimals.push("eagle");
console.log(pushAnimals);
console.log(myNewArrayOfAnimals);

// 11. pop()
// Este método elimina el último elemento del final del array y devuelve ese elemento.
pushAnimals.pop();
console.log(pushAnimals);

// 12. shift()
// Este método elimina uno o más elementos al principio de una matriz y devuelve la nueva longitud de la misma.
pushAnimals.shift();
console.log(pushAnimals);

// 13. unshift()
// Este método añade uno o más elementos al principio de una matriz y devuelve la nueva longitud de la misma.
pushAnimals.unshift("Dragons");
console.log(pushAnimals);

// 14. slice()
// Este método devuelve un nuevo array con los elementos especificados de inicio a fin.
const slicedArray = ["a", "b", "c", "d", "e"];
// primer param especifica donde comenzamos
// segundo param especifica donde cortamos [excluyendo el mismo]
const sliced = slicedArray.slice(0, 4);
const slicedTwo = slicedArray.slice(4);
console.log(sliced);
console.log(slicedTwo);

// 15. reverse()
// Este método invierte un array en su lugar. El elemento en el último índice será el primero y el elemento en el índice 0 será el último.
let reversedArray = [1, 2, 3];
console.table(reversedArray.reverse());

// 16. find()
// Este método devuelve el valor del primer elemento de un array que supera la prueba en una función de comprobación.
let usingFind = reversedArray.find((numberToFind) => {
  return numberToFind > 1;
});
console.log(usingFind);

// 17.  findInIndex()
// Este método devuelve el índice del primer elemento de un array que supera la prueba en una función de comprobación.
const indexAnimals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];
let animalIndexFinder = indexAnimals.findIndex(
  (animalInArray) => animalInArray === "cheetah"
);
console.log(animalIndexFinder);

// 18. indexOff()
// Este método devuelve el índice de la primera aparición del elemento especificado en la matriz, o -1 si no se encuentra.
let indexFinderOfDogs = indexAnimals.indexOf("dog");
console.log(indexFinderOfDogs);
let indexFinderOfDogNegative = indexAnimals.indexOf("dogs");
console.log(indexFinderOfDogNegative);

// 19. fill()
// Este método rellena los elementos de un array con un valor estático y devuelve el array modificado. Este ejemplo depende de un constructor para demostrar el resultado de este metodo :)
const usingFillConstructor = new Array(4);
console.log(usingFillConstructor);
console.log(
  usingFillConstructor.fill([
    "Wu Tang",
    "Kendrick",
    "Outkast",
    "Slick Rick",
    "J Cole",
    "Eminem",
  ])
);
console.table(usingFillConstructor);

// URL TO REVIEW : https://www.programiz.com/javascript/library/array
// URL TO REVIEW: https://www.programiz.com/javascript/library/string
// URL TO REVIEW: https://www.programiz.com/javascript/numbers

// Lab To Work ON: https://github.com/ironhack-labs/lab-javascript-functions-and-arrays

// ---------------- EJERCICIOS ----------------


// --------- Ejercicio 1 (map): ---------
// Crea un array con los nombres de 5 de tus amigos o familiares. Utiliza el método .map() para crear un nuevo array con las iniciales de cada nombre.


// --------- Ejercicio 2 (filter): ---------
//  Crea un array con números del 1 al 10. Utiliza el método .filter() para crear un nuevo array con solo los números pares.


// --------- Ejercicio 3 (sort): ---------
// Crea un array con nombres de frutas desordenadas. Utiliza el método .sort() para ordenar los nombres de las frutas en orden alfabético.


// --------- Ejercicio 4 (forEach): ---------
// Crea un array con números aleatorios. Utiliza el método .forEach() para ir sumando cada número a un resultado final.


// --------- Ejercicio 5 (concat): ---------
// Crea dos arrays, uno con números y otro con letras. Utiliza el método .concat() para unir ambos arrays en un solo array.


// --------- Ejercicio 6 (every): ---------
// Crea dos arrays con números. Utiliza el método .every() para verificar si todos los números del array son inferiores a 40. Haz que en un array devuelva true y en el otro false.


// --------- Ejercicio 7 (some): ---------
// Crea un array con objetos, cada objeto debe tener una propiedad llamada "status" con un valor "completo" o "incompleto". Utiliza el método .some() para verificar si al menos un objeto en el array tiene un status de "incompleto".


// --------- Ejercicio 8 (includes): ---------
// Crea un array con nombres de animales. Utiliza el método .includes() para verificar si un animal específic0 está en el array.


// --------- Ejercicio 9 (join): ---------
// Crea un array con nombres de animales. Utiliza el método .join() para convertir el array en un string separado por comas.


// --------- Ejercicio 10 (push, pop, shift, unshift): ---------
// Crea un array con nombres propios. Utiliza el método .pop() para eliminar el último nombre del array, .push() para añadir un nombre nuevo al final, .shift() para eliminar el primer elemento del array y .unshift() para añadir un nuevo nombre al inicio.


// --------- Ejercicio 11 (slice): ---------
// Crea un array con números del 1 al 10. Utiliza el método .slice() para crear un array que contenga solo del 5 al 8.


// --------- Ejercicio 12 (reverse): ---------
// Crea un array con strings. Utiliza el método .reverse() para invertir el orden de los strings en el array.


// --------- Ejercicio 13 (find): ---------
// Crea un array con nombres de cantantes. Utiliza el método .find() para encontrar el primer nombre que empiece por 'M'.


// --------- Ejercicio 14 (findIndex): ---------
// Crea un array de títulos de películas. Utiliza el método .findIndex() para encontrar el índice de la primera película cuyo título conste de solo una palabra.


// --------- Ejercicio 13 (indexOf): ---------
// Crea un array con números. Utiliza el método .indexOf() para encontrar la primera aparición de un número específico en el array.


// --------- Ejercicio 14 (fill): ---------
// Crea un array con números aleatorios. Utilizando el método .fill(), haz que el cuarto elemento del array cambie su valor a 55.


// --------- Ejercicio 15 (reduce): ---------
// Crea un array con números del 1 al 10. Utiliza el método .reduce() para sumar todos los números en el array.
console.log(sum2); */