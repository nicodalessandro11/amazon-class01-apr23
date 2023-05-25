// ---------------- EJERCICIOS ----------------

// --------- Ejercicio 1 (map): ---------
// Crea un array con los nombres de 5 de tus amigos o familiares. Utiliza el método .map() para crear un nuevo array con las iniciales de cada nombre.
const amigos = ["Facu", "Diego", "Emilio", "Juli"];

// Usamos map + apuntamos a pocision con bracketds []
const mappedAmigos = amigos.map((arrayDeAmigos) => arrayDeAmigos[0]);
//  Usamos map + metodo slice dentro del map para poder cortar la copia del nuevo array como queremos
const mappedAmigosUsingSlice = amigos.map((arrayDeAmigos) =>
  arrayDeAmigos.slice(0, 1)
);

console.log(mappedAmigosUsingSlice);

// --------- Ejercicio 2 (filter): ---------
//  Crea un array con números del 1 al 10. Utiliza el método .filter() para crear un nuevo array con solo los números pares.

// filter()
// si un numero % 2 === 0 // un resultado con un numero par!
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numbers.filter((number) => number % 2 === 0); // JS one liner :)
let pareUsingIf = numbers.filter((number) => {
  if (number % 2 === 0) return number;
});
console.log(pareUsingIf);

// --------- Ejercicio 3 (sort): ---------
// Crea un array con nombres de frutas desordenadas. Utiliza el método .sort() para ordenar los nombres de las frutas en orden alfabético.
const frutas = ["plátano", "manzana", "coco", "kiwi", "fresa", "pera"];
frutas.sort();
// return numOne > numTwo ? 1 : -1;
let frutasExpandidasSort = frutas.sort(
  (fruitToCompareOne, fruitToCompareTwo) => {
    return fruitToCompareOne > fruitToCompareTwo ? 1 : -1;
  }
);
console.log(frutasExpandidasSort);

// --------- Ejercicio 4 (forEach): ---------
// Crea un array con números aleatorios. Utiliza el método .forEach() para ir sumando cada número a un resultado final.
const numerosForEach = [2, 3910, 23, 456, 2555, 421, 2689, 182, 334, 901];
let result = 0;
numerosForEach.forEach((numeroASumar) => (result += numeroASumar));
console.log(result);

// --------- Ejercicio 5 (concat): ---------
// Crea dos arrays, uno con números y otro con letras. Utiliza el método .concat() para unir ambos arrays en un solo array.

let paises = ["arg", "vzl", "col", "esp"];
let ciudades = ["bcn", "mad", "par", "lnd"];

//let variableDescriptiva = arrayQueTengaInfo.concat(eseArrayQueQueremosUnificar)

let combinacion = paises.concat(ciudades);
console.log(combinacion);
