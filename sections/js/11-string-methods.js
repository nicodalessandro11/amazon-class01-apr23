console.log("String Methods Class:");

// String Methods

// Como sabemos, en JavaScript una string es un tipo de dato básico que consiste en una sucesión de caracteres contenida entre comillas ('', "" o ``).

// JavaScript nos proporciona una serie de métodos incorporados para trabajar con strings. Estos métodos nos permiten manipularlas de varias maneras: extraer substrings, buscar un carácter específico o un grupo de caracteres, o reemplazar partes de una string.

// A continuación veremos algunos ejemplos de string methods. Recordad que hay muchos más, y que Google siempre serà vuestro mejor amigo cuando queráis saber si alguna cosa en concreto se puede hacer con algún método integrado o no :)

// 1. length
// La propiedad length se utiliza para determinar la cantidad de caracteres en una string. Esto puede ser útil para bucles y otras operaciones que necesitan conocer el tamaño de una string. Recordad que los espacios y la puntuación también se cuentan como caracteres.
// Ejemplo:
let str = "Hola, mundo!";
console.log(str);
console.log(str.length); // 12

// 2. indexOf(valorABuscar, desdeIndice)
// Se utiliza para buscar un carácter específico o un grupo de caracteres dentro de una string. Devuelve el índice de la primera ocurrencia del valor de búsqueda, o -1 si el valor no se encuentra en la string. El segundo parámetro es opcional y es el índice desde donde comenzar a buscar. Si este no se proporciona, comenzará a buscar desde 0.
// Ejemplo:
console.log(str.indexOf("mundo")); // 6
console.log(str.indexOf("Mundo")); // -1

// 3. lastIndexOf(valorABuscar, desdeIndice)
// Se utiliza para encontrar la última ocurrencia de un carácter específico o un grupo de caracteres dentro de una string. Devuelve el índice de la última ocurrencia del valor de búsqueda, o -1 si el valor no se encuentra en la string. El segundo parámetro es opcional y es el índice desde donde comenzar a buscar. Si este no se proporciona, comenzará a buscar desde el final de la string.

//Ejemplo:
console.log(str.lastIndexOf("o")); // 10
console.log(str.lastIndexOf("o", 5)); // 1
console.log(str.lastIndexOf("z")); // -1

// 4. replace(valorABuscar, valorAReemplazar)
// El método replace() se utiliza para reemplazar un "carácter" específico o un grupo de "caracteres" dentro de una string con un nuevo valor. Puede tomar dos argumentos: el valor a ser reemplazado y el valor con el que reemplazarlo.
console.log(str.replace("mundo", "javascript")); // "Hola, javascript!"
console.log(str.replace("world", "javascript")); // no te cambia nada porque no existe!!

// 5. toUpperCase()
// Se utiliza para convertir toda una string a mayúsculas.
// Ejemplo:
console.log(str.toUpperCase()); // HOLA, MUNDO!

// 6. toLowerCase()
// Se utiliza para convertir toda una string a minúsculas.
// Ejemplo:
console.log(str.toLowerCase()); // hola, mundo!

// 7. charAt(indice)
// Devuelve el carácter que se encuentre en el índice que le pasamos como argumento.
console.log(str.charAt(0));

// 8. slice(inicio, fin)
// Devuelve una substring creada a partir del índice que le pasamos como primer argumento. El segundo argumento, si se incluye, sirve para marcar el fin de la substring.
// NOTA IMPORTANTE al igual que el substring toma dos argumentos: el índice del primer carácter a incluir y el índice del primer carácter a excluir (es decir, el índice que pongamos como segundo argumento ya no va a formar parte de la substring resultante).
// Ejemplo:
console.log(str.slice(0, 4)); // Hola

// 9. substring(inicio, fin)
// Al igual que slice(), se utiliza para extraer una porción de una string. Toma dos argumentos: el índice del primer carácter a incluir y el índice del primer carácter a excluir (es decir, el índice que pongamos como segundo argumento ya no va a formar parte de la substring resultante).
// Ejemplo 1:
console.log(str.substring(0, 4)); // Hola
console.log(str.substring(6, 11)); // mundo
// Ejemplo 2:
const fullName = "Brad Pitt";
const iAmACoolGuyWhoIsConnected = fullName.substring(0, 4);
console.log(
  `Hey yo what up my homie ${iAmACoolGuyWhoIsConnected}, hope all is good`
);

// 10. split(separador, límite)
// Divide una string en substrings y devuelve un array con las substrings resultantes. El separador es una string que se usará como guia para separar la string. Los carácteres que coincidan con el separador serán eliminados del array resultante. Si no se incluye el separador el array contendra un solo elemento con toda la string original. El límite es un argumento opcional y sirve para delimitar el número de elementos que contendrá el array.
// Ejemplos:
console.log(str.split(" "));
console.log(str.split("  "), 2);
console.log(str.split(""));
console.log(str.split());

// 11. includes(substring, posicion)
// Este método busca la substring que le pasamos como primer argumento y devuelve true o false según si la string contiene dicha substring o no.
// La posición es un argumento opcional y representa el índice desde el cual se va a empezar a buscar la substring. Si no se especifica, esta posición es 0.
// Ejemplos:
console.log("includes()");
console.log(str.includes("ola")); // true
console.log(str.includes("ola", 5)); // false
console.log("-------------");

// 12. endsWith(substring, posicion)
// Comprueba si una string termina con la substring que le pasamos como argumento, y devuelve true or flase según sea el caso. En caso de que se indique la posición, se comprueba si hasta ese índice (excluyendo el índice) la string termina con la substring que le indicamos.
// Ejemplos:
console.log("endsWith()");
console.log(str.endsWith("!")); // true
console.log(str.endsWith("mundo!")); // true
console.log(str.endsWith("mundo")); // false
console.log(str.endsWith(",")); // false
console.log(str.endsWith(",", 5)); // true

// 13. trim()
// Nos sirve para eliminar los espacios en blanco de una string.
// Ejemplo:
const wuTang =
  "                         WU Tang Clan is for the children                                    ";
console.log(wuTang.length);
console.log(wuTang.trim().length);

// ---------------- EJERCICIOS ----------------

// Ej. 1
// Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs:
let stringToLog = "    JavaScript is fun! ";
// 23
// 'JavaScript is fun!'
// ['java', 'cript i', ' fun!']
// 'JAVASCRIPT IS FUN!'
// 'f'
// 5
// 15
// 'CSS is fun!'

// Ej. 2 Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.
const original = "Hello world!";
let stringToChange = "Hello world!";
console.log(stringToChange.endsWith("o")); // true
console.log(stringToChange.charAt(3)); // 'r'
console.log(stringToChange.includes("hello")); // true
console.log(stringToChange.lastIndexOf("o")); // 4
console.log(stringToChange.indexOf("w")); // -1
