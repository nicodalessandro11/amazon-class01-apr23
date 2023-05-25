// Iteration #1: Find the maximum
//function maxOfTwoNumbers() {}
const maxOfTwoNumbers = (numUno, numDos) => {
  //Primera manera - condicional
  if (numUno > numDos) {
    return numUno;
  } else {
    return numDos;
  }
};
const maxOfTwoNumbersUsandoMath = (numUno, numDos) => {
  // usando el constructor de MATH para usar un metodo de numero y simplificarnos la vida
  return Math.max(numUno, numDos);
};

console.log(`Iteratiopn 001`);
console.log(maxOfTwoNumbers(8, 10));
console.log(maxOfTwoNumbersUsandoMath(8, 20));
console.log(`----------------`);

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot', 'esternocleidomastoideo'];
const findLongestWord = (matrizDePalabras) => {
  if (matrizDePalabras.length === 0) return null;
  let palabraMasLarga = '';
  for (let i = 0; i < matrizDePalabras.length; i++) {
    if (palabraMasLarga.length < matrizDePalabras[i].length) {
      palabraMasLarga = matrizDePalabras[i];
    }
  }
  return palabraMasLarga;
};
console.log(`Iteratiopn 002`);
console.log(findLongestWord(words));
console.log(`----------------`);
findLongestWord(words);

// ITERATION 002  - JULI's ANSWER
let wordsJuli = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWordJuli(x) {
  if (x.length === 0) return null;
  let maxWord = ' ';
  for (let i = 0; i < x.length; i++) {
    if (maxWord.length < x[i].length) {
      maxWord = x[i];
    }
  }
  console.log(maxWord);
  return maxWord;
}
findLongestWordJuli(wordsJuli);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbersEmpty = [];
const sumNumbers = (matrizDeNumeros) => {
  // condicionar el caso negativo si la matriz no CONTIENE ningun tipo de numero :(
  if (matrizDeNumeros.length === 0) return 0;
  // se crea una variable que la incializa en 0 que est variable contiene la suma total de el array de numeros
  let suma = 0;
  // iterar correctamente la matriz de numeros para obtener este resultado matematico :)
  for (let i = 0; i < matrizDeNumeros.length; i++) {
    suma += matrizDeNumeros[i];
  }
  // retornar la variable suma que contiene el valor total de la suma de la matriz
  return suma;
};
console.log(`La suma total de la matriz 'numbers' es de ${sumNumbers(numbers)}`);
console.log(`La suma total de la matriz 'numbers' es de ${sumNumbers(numbersEmpty)}`);

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const sum = (matrixMixta) => {
  // condicionar el caso de precaucion de matriz vacia.
  if (matrixMixta.length === 0) return 0;
  // se crea una variable que la incializa en 0 que est variable contiene la suma total de el array de numeros
  let sumaTotalDeMatrizCompleja = 0;
  // Loop
  for (let i = 0; i < matrixMixta.length; i++) {
    let elemento = matrixMixta[i];
    if (typeof elemento === 'string') {
      sumaTotalDeMatrizCompleja += elemento.length; // nos encargamos de los strings
    } else if (typeof elemento === true) {
      sumaTotalDeMatrizCompleja += 1; // nos encargamos de los booleanos tipo TRUE
    } else if (typeof elemento === 'object' && elemento !== null) {
      throw new Error('No aceptamos objetos dentro de esta operacion....');
    } else {
      sumaTotalDeMatrizCompleja += elemento; // nos encargamos de los numerows :)
    }
  }
  // retornar la variable que contiene la suma
  return sumaTotalDeMatrizCompleja;
  // typeof === constructor de verificacion de tipo de dato
  // QUEREMOS LOOPEAR
  // NECESITAMOS CONDICIONAR
  // STRING === VAMOS A CONTAR LA LONGITUD DEL STRING
  // NUM === NUMERO
  // BOOLEANO [TRUE || FALSE ] === TRUE(1) FALSE(NI SIQUIERA CONDICIONAMOS NADA)
  // OBJETO === TIRART UN ERROR PARA OMITIR ESTE TIPO DE DATO EN LA OPERACION MATEMATICA
};
console.log(sum(mixedArr));

// Iteration #4: Calculate the average  -- FACU - REUTILIZANDO FUNCION SUMNUMBERS()
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(promedio) {
  let resultado = promedio.length;
  return sumNumbers(promedio) / resultado;
}
let promedio = averageNumbers(numbersAvg);
console.log(promedio);

// Iteration #4 - Juli
const numbersAvgJuli = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbersJuli(x) {
  let addedNumsAvg = 0;
  for (let i = 0; i < x.length; i++) {
    addedNumsAvg = addedNumsAvg + x[i];
  }
  console.log(addedNumsAvg / x.length);
  return addedNumsAvg / x.length;
}
averageNumbersJuli(numbersAvgJuli);

// Iteration #4: Calculate the average  -- USANDO CONDICIONALES + BUCLE
const averageNumbersDiego = (numeros) => {
  if (numeros.length === 0) return 0;
  if (numeros.length === 1) return numeros[0];

  let sumaTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  console.log(sumaTotal / numeros.length);
  return sumaTotal / numeros.length;
};
averageNumbersDiego(numbersAvgJuli);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = (arrayDePalabras) => {
  // precaucion - caso de matriz con 0 posiciones
  if (arrayDePalabras.length === 0) return 0;
  let sumaTotal = 0;
  for (let i = 0; i < arrayDePalabras.length; i++) {
    sumaTotal += arrayDePalabras[i].length;
  }
  let operacionMatematica = sumaTotal / arrayDePalabras.length;
  console.log(operacionMatematica);
  // console.log(sumaTotal / arrayDePalabras.length);
  // return sumaTotal / arrayDePalabras.length;
};
averageWordLength(wordsArr);

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

const uniquifyArray = (wordArray) => {
  if (wordArray.length === 0) return null;

  let arrayLimpio = [];
  // forEach
  wordArray.forEach((elemento) => {
    // includes()
    if (!arrayLimpio.includes(elemento)) {
      arrayLimpio.push(elemento);
    }
  });
  console.log(arrayLimpio);
  return arrayLimpio;
};
uniquifyArray(wordsUnique);

const uniqueArr = (wordArray) => {
  let arrayLimpio = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (arrayLimpio.indexOf(wordArray[i]) === -1) {
      arrayLimpio.push(wordArray[i]);
    }
  }
  console.log(arrayLimpio);
  return arrayLimpio;
};
uniqueArr(wordsUnique);
// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayDePalabras, palabraABuscar) {
  if (arrayDePalabras.includes(palabraABuscar)) {
    console.log(`Palabra - ${palabraABuscar} se encuentra dentro del array`);
    return true;
  } else {
    console.log(`Palabra - ${palabraABuscar} no se encuentra dentro del array`);
    return false;
  }
}
function doesWordExistEmilio(arrayDePalabras, palabraABuscar) {
  for (let i = 0; i < arrayDePalabras; i++) {
    if (arrayDePalabras[i] === palabraABuscar) {
      console.log(`Palabra - ${palabraABuscar} se encuentra dentro del array`);
      return true;
    }
    console.log(`Palabra - ${palabraABuscar} no se encuentra dentro del array`);
    return false;
  }
}

doesWordExist(wordsFind, 'subset');
doesWordExistEmilio(wordsFind, 'subset');
// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// let forEachTest = wordsCount.forEach((elemento) => console.log(elemento));
// forEachTest;

function howManyTimes(arrayAVerificar, palabraABuscar) {
  let total = 0;
  if (arrayAVerificar.length === 0) return 0;
  arrayAVerificar.forEach((elemento) => {
    if (elemento === palabraABuscar) {
      total++;
    }
  });
  console.log(total);
  return total;
}
howManyTimes(wordsCount, 'matter');

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
