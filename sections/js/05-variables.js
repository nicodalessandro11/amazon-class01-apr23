// JavaScript Variables
// En programacion, una variable coloquialmente se define como un contenedor (storage area) donde contenemos/guardamos informacion/data.

//Ejemplo:

let number = 6;

// Aca, number es una variable que esta guardando data que casualmente es un tipo de dato primitivo que ya conocemos como el DT = "Number".

// Javascript Declaracion de Variables
// En JS,tenemos basicamente 3 maneras de declarar variables :)

// var, let, const [RESERVED KEYWORDS]

var x;
let y;

// En este caso particular, hemos declarado las variables, que tiene nombre x & y. E esencia, estas variables estan vacias ya que no hemos alocalizado ningun tipo de dato dentro de la variable.
// En este caso particular, hemos decalrado las variables, que tiene los nombres x&y.
console.log(`The old value of this variable is: ${y}`);

// Usar un operador de asignacion, que es el operador = para asignarle un valor a esta variable.
y = `The red hot chilli peppers`;
console.log(`The new value of this variable is: ${y}`);
y = true;
console.log(`The new value of this variable is: ${y}`);
y = 8;
console.log(`The new value of this variable is:` + y);

// Condiciones de nomenclatura que podemos referenciar para aclarar dudas:
// Los namings de las variables pueden ser de: ["letra", "pisoAbajo, guionBajo, underscore", "symbolo de $"]

// Valido
let a = "Hola";
let _a = "Hola";
let $a = "Hola";
console.log(a, _a, $a);

// No es valido
// No es valido nombrar variables con numeros ya que JS no lo parsea correctamente.
//let 7eleven = "Konichiwua";

// Javascript es case-sensitive, js es sensible a las mayusculas :) - Jarko Garrido.
// Basicamente = jarko y Jarko son dos cosas diferentes

let jarko = "A great developer and even better philosopher";
let Jarko = "Quillooooooooo";
console.log(jarko);
console.log(Jarko);

// MUlti Word Variable Declaration
// AKA CAMEL CASE
// AKA CAMELLO
// AKA QUILLOOOO

//let firstname = "Incorrect naming convention";
//let firstName = "Correct naming convention";

// En JS, SIEMPRE usen la convencion de nomenclatura que se llama "camelCase" para nombre variables de mas de una palabra :)
// Ej: firstname, cityNames, annualSalary, favoriteBook, favoriteMovies ....

// KEYWORDS QUE NO SON ACEPTADAS
// Palabras que no podemos usar para inicializar variables
//new = palabra reservada

//let new = 5; // Te da un error

// Nosotros podemos nombrar variables a nuestro gusto, pero es correcto vale, usar nombres descriptivos para asignar tus variables. Por ejemplo, sie stamos creando una variable como hicimos para las ciduades, es correcto llamar a esa variable cityNames en vez de a o x o y o city.

// Var - Convention
// 1. Ya esta manera de declarar variables, yo no se usa ya que tenemos let y const.
// 2. Se puede reAsignar como hicimos con let
// 3. Se ve bastante en preguntas online, tengan en cuenta que estan viendo codigo un poco outdated.
// 4. Se puede inicializar sin ningun tipo de valor y se puede asignar un valor despues
console.log("-----------------------------");
// syntax - var
console.log("Var - syntax & example");
var firstName = "Diego";
console.log(firstName);

firstName = "Jarko";
console.log(firstName);
console.log("-----------------------------");

// Let - Convention
// 1. Se puede reAsignar como hicimos con var
// 2. Current/Modern approach
// 3. Se puede inicializar sin ningun tipo de valor y se puede asignar un valor despues

// syntax - let
console.log("Let - syntax & example");
let favoriteGuitarPlayer = "Gustavo Cerati";
console.log(favoriteGuitarPlayer);

favoriteGuitarPlayer = "Jimmy Hendrix";
console.log(favoriteGuitarPlayer);

// Const - Convention
// 1. NO se puede reAsignar como hicimos con let y var.
// 2. Convencion mas moderna de usar variables en JS.
// 3. No podemos declarar una constant sin inicializarla :(

// syntax - const
console.log("Const - syntax & example");
const rockGroup = "Led Zeppelin";
console.log(rockGroup);

// Ejemplo de reasignacion - NOT POSSIBLE
//rockGroup = "The Doors";

// Ejemplo de declaracion inicial vacia - NOT POSSIBLE
//const bestHipHopGroup =
// --- ERROR HOVER ON VS CODE 'const' declarations must be initialized.
//console.log(bestHipHopGroup);

// .....
// .....
// .....
// .....
// .....
// Ejemplo - String
const myMessage = "Js is legit";
console.log(myMessage);

// Ejemplo - Boolean
const isTrue = false;
console.log(isTrue);

// Ejemplo - Array
const movies = [
  {
    movie: "Wolf of Wallstreet",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
    year: 2010,
  },
  {
    movie: "Fight Club",
    genre: ["Drama", "Noir", "Comedy", "Action"],
    director: ["David Fincher"],
    location: "Los Angeles, California",
    actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
  },
  {
    movie: "The Neon Demon",
    genre: ["Aleix", "Thriller", "Drama"],
    director: ["Nicolas Winding Refn"],
    location: "Copenhagen, Denmark",
    actors: ["Elle Fanning", "Jenna Malone", "Keanu Reeves"],
    year: 2016,
  },
];
console.table(movies);

// Ejemplo - Object
const myBio = {
  firstName: "Diego",
  lastName: "Zito",
  ocuppation: "FE - Instructor",
  hobbies: [
    "Music",
    "Guitar Playing",
    "Piano",
    "Surfing",
    "Cycling",
    "Stoicism",
  ],
  skills: {
    surfing: "Excellent",
    skiing: 0,
    guitar: ["Acoustic", "Electronic"],
    instruments: {
      percussion: ["Drums", "Toms", "Snares", "Cymbal"],
      string: ["Guitar", "Bass", "Cuatro"],
    },
  },
};
console.table(myBio);
