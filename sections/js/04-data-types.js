// Data types JS

// Tenemos 2 tipos de datos en este tipo de lenguaje :)

// Tenemos Datos Primitivos y noPrimitivos. En pocas palabras los datos primitivos representan un valor y los datos no primitivos los podemos entender como composiciones de datos primitivos, que vendrian siendo lo que en JS llamamos "OBJETOS o ARRAYS"

// Segun MDN los datos primitivos son tipos de datos que no estan compuestos por un objeto, array y no tenga algun metodo.

// En JS tenemos estos 6 tipos de datos primitivos:

//     - numeros
//     - strings
//     - Booleanos
//     - null
//     - undefined
//     - symbolos -  — that's guaranteed to be unique.

// Datos Primitivos - Examples

// Numeros
console.log(8);
console.log(8.5);
console.log(-2);
// nan === not a number
let miSuperCoolSomething = "Malaga";
console.log(typeof miSuperCoolSomething);
console.log(8 / miSuperCoolSomething);

//Strings
console.log("Wu Tang Clan is for the children");

// Booleans
console.log(true);
console.log(false);

//null
console.log(null);

//undefined
let diego = undefined;
//let diego = "";
console.log(typeof diego);

// DATOS NO PRIMITIVOS
// / En JS tenemos estos 2 tipos de datos noPrimitivos:

//     - Arrays - Arrays
//     - Objects - Objetos
//
// Datos No Primitivos - Examples

// Array Examples

// Array Example - 1
console.log("-----------------------");
console.log("This is my cool table of Funk Artists:");
console.log("Using just strings");
console.table([
  "Daft Punk",
  "Marc Rebillet",
  "Andersoon Paak",
  "Los Amigos Invisibles",
]);

// Array Example - 2
console.log("-----------------------");
console.log("This is my cool table of Funk Artists with other stuff:");
console.log("Mix of primitive dataTypes");
console.table(["Erykah Badu", 10, "Pepino", false, undefined, null, 99]);

// Objetos
// Ejemplo syntax de inicializacion = {}
// Ejemplo syntax contenxto = {key: "valor"}

// Object Example - 1
// Simple Object
console.log("-----------------------");
console.log("AN object with some of my info:");
// switch .log for .able to see diff
console.log({
  firstName: "Diego",
  lastName: "Zito",
  occupation: "I am still figuring that out!",
  hobbies: [
    "Music",
    "Guitar playing",
    "Piano",
    "Snowboarding",
    "Stoicism",
    "Aprender malagueño",
  ],
  skills: {
    snowboarding: "El papa de los helados",
    woodWorking: 0,
    guitar: ["Acustic", "Electronic"],
    instruments: {
      percussions: ["Drums", "Toms", "Snare Drums", "Cymbal"],
      string: ["Guitar", "Bass", "Cuatro"],
    },
  },
});

// Object Example - 2
// Array of Objects
console.log("-----------------------");
console.table([
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
]);
console.log([
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
]);

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
console.log("-----------------------");
console.log("Calling movie array from variable:");
console.log(movies);
console.log(movies[0].actors[1]);

// Oldschol Way - PRIOR ECMA6
console.log(
  "I have a huge crush on " + movies[0].actors[1] + " Using OLDSCHOOL Way"
);

//Modern Way - POST ECMA6
console.log(
  `I have a huge crush on ${movies[0].actors[1]} - USING TEMPLATE LITERALS`
);
