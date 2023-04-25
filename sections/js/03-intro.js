console.log("Hello World");

/* Esto es un Comment */
// Esto es un Comment

// La Consola
// El objeto console provee acceso a la consola de depuración de los navegadores (p. ej. la Consola Web en Firefox). Los detalles de como funciona varían de navegador en navegador, pero hay un conjunto de características que de facto son proporcionadas generalmente.
console.log("Ignorance is the cause of fear - Seneca");

// .log() aca en este caso especifico es un metodo nativo que muestra un mensaje en la consola web (o del intérprete JavaScript) y este mensaje en este caso es de tipo "string" que es un tipo de dato primitivo.

// El Documento
// La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).
// El árbol DOM incluye elementos como <body> y <table>, entre muchos otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[8]);
// console.log((document.all[8].textContent = "Wu Tang Clan"));
// console.log((document.all[8].innerText = "Wu Tang Clan"));
console.log((document.all[8].innerHTML = "Wu Tang Clan"));

console.log(document.links);
console.log(document.images);

// SIMPLE EXAMPLE OF A FUNCTION DOING A MATEHMATICAL ALGORITHIM
function gemma() {
  //   alert("Hello Gemma");
  return 2 + 2;
}
console.log(gemma());
gemma();

// Tabla
// syntax = console.table()
// Muestra datos tabulares como una tabla

// Esta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns.

// Muestra data como una tabla en la consola. Cada elemento en el array (o propiedad enumerable si data es un objeto) será una fila en la tabla.

// La primera columna de la tabla se identificará como (index). Si data es un array, sus valores serán los índices del array. Si data es un objeto, entonces sus valores serán los nombres de las propiedades. Tenga en cuenta que (en Firefox) console.table está limitado a mostrar 1000 filas (la primera columna es la llamada index).

console.log(["Barcelona", "Berlin", "Tokyo", "Malaga"]);
console.table(["Barcelona", "Berlin", "Tokyo", "Malaga"]);
