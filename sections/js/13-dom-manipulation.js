console.log("DOM Manipulation Intro Class:");
// DOM MANIPULATION - Se trabaja con el master (02)

// En el desarrollo de sitios web, DOM son las siglas de Document Object Model. Se trata de una interfaz de programación que nos permite crear, modificar o eliminar elementos de un documento web. La manipulación del DOM es cuando se utiliza JavaScript para añadir, eliminar y modificar elementos de un sitio web. Es muy común en el desarrollo web

// ¿Qué es el DOM?
// El DOM significa Document Object Model (Modelo de Objetos del Documento). Puede entenderse simplemente como un árbol de nodos creado por el navegador. Cada uno de estos nodos tiene sus propias propiedades y métodos que pueden ser manipulados usando JavaScript.

// La capacidad de manipular el DOM es una de las habilidades más únicas y útiles de JavaScript.

// La imagen siguiente ofrece una representación visual del aspecto del árbol DOM.

// Window Object
//En JavaScript, el objeto window representa la ventana del navegador en la que se está ejecutando el script. Es el objeto global y se puede acceder a él desde cualquier parte del código sin necesidad de importarlo.
// Algunos ejemplos de cómo utilizar el objeto window en JavaScript son:
// Obtener la URL actual: window.location.href
// Mostrar una alerta: window.alert("Mensaje de alerta")
// Abrir una nueva ventana: window.open("http://www.example.com", "Nombre de la ventana", "opciones")
// Redirigir a otra página: window.location.assign("http://www.example.com")
// Cambiar el tamaño de la ventana: window.resizeTo(ancho, alto)
// Obtener la altura y ancho de la ventana: window.innerHeight y window.innerWidth
// Es importante señalar que algunas de las funciones que se mencionan anteriormente pueden ser bloqueadas por el navegador si la página no es cargada en modo seguro (https) o si el usuario tiene habilitadas las restricciones de popups.

// Es importante señalar que algunas de las funciones que se mencionan anteriormente pueden ser bloqueadas por el navegador si la página no es cargada en modo seguro (https) o si el usuario tiene habilitadas las restricciones de popups.

//START HERE

// uncommment
// console.log(window);

// El Documento
// La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).
// El árbol DOM incluye elementos como <body> y <table>, entre muchos otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

// uncomment
// console.log(document);
// console.log(document.title);
// console.log(document.head);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.body);

// Cómo seleccionar elementos en el DOM
// Para poder manipular un elemento en el DOM, tienes que seleccionar ese elemento en particular. Por suerte para nosotros tenemos 4 formas principales de seleccionar elementos.

//Una vez que hayas seleccionado un elemento, puede añadir estilos al elemento, manipular sus atributos y recorrer los elementos padre e hijo.

// 1. getElementById Method
// La forma más común de acceder a un elemento HTML es utilizar el id del elemento.
//El id distingue entre mayúsculas y minúsculas. Por ejemplo, el "dom-manipulation" y el "Dom-manipulation" son ids totalmente diferentes.

// uncomment
//console.log(document.getElementById("wutang"));

// 2. getElementsByClassName() Method
// Este método devuelve una colección de todos los elementos del documento con el nombre de clase especificado.
// Por ejemplo, nuestra página HTML de abajo contiene 5 elementos con class="wuTang".

// uncomment
// console.log(document.getElementsByClassName("wuTang"));
// console.log(document.getElementsByClassName("wuTang")[3]);
// console.log(document.getElementsByClassName("rock"));

// 3. getElementsByTagName() Method
// Este método acepta un nombre de etiqueta y devuelve todos los elementos del nombre de etiqueta especificado en el orden en que aparecen en el documento.

//console.log(document.getElementsByTagName("h5"));
//console.log(document.getElementsByTagName("h5")[4].innerHTML);

// 4. querySelector() Method
// Devuelve el primer valor que coincida con el selector que se le da. Este método puede aceptar todos los selectores de estilo CSS, lo que le permite seleccionar por etiqueta, clase o ID.

// uncomment
// console.log(document.querySelector("#query-selector"));
// console.log(document.querySelector(".wuTang"));
// console.log(document.querySelector(".myLove"));
// console.log(document.querySelector("h5"));
// console.log(document.querySelector("#query-selector .hipHop .myLove"));
// console.log(document.querySelector("#query-selector .hipHop"));
// console.log(document.querySelector("#query-selector .hipHop"));
// console.log(document.querySelector(".myLove"));
// console.log(document.querySelector("#classname-example"));
// console.log(document.getElementById("classname-example"));

// 5.querySelectorAll() Method
// Funciona de forma similar a la anterior, que devuelve una colección de listas de nodos con todos los elementos coincidentes.

// uncomment
// console.log(document.querySelectorAll(".wuTang"));

// --------------------------------------------

// Cómo recorrer el documento
// A estas alturas estarás de acuerdo conmigo en que todo en un documento HTML es un nodo.
// También el texto dentro de los elementos HTML son nodos de texto.

// Con el DOM de HTML, puedes navegar por el árbol de nodos y acceder a los nodos en el árbol usando las relaciones de nodos de las que hablamos antes (padre, hijo(s), hermano(s), etc.).

// Se pueden crear nuevos nodos, y todos los nodos pueden ser modificados o eliminados.

// Un pequeño repaso
// Cada nodo tiene exactamente un padre, excepto el nodo superior (que no tiene padre).
// Un nodo puede tener más de un hijo.
// Los hermanos son nodos con el mismo padre.
// En esta sección, vamos a ver cómo obtener el elemento padre, los hermanos de un elemento y los hijos de un elemento. Utilizaré las siguientes propiedades de nodo para lograr estas cosas:

// - parentNode
// - childrenNodes
// - firstElementChild
// - lastElementChild
// - nextElementSibling
// - previousElementSibling

// Last Element Child
// uncomment
// console.log(document.querySelector("#traverse-document").lastElementChild);

// First Element Child

// uncomment
// console.log(document.querySelector("#traverse-document").firstElementChild);

// Children

// uncomment
// console.log(document.querySelector("#traverse-document").children);
// console.log(document.querySelector("#traverse-document").children[4]);

// parentNode
// uncomment
// console.log(document.querySelector("#second-child").parentNode);

// parentElement
// uncomment
// console.log(document.querySelector("#second-child").parentElement);

// nextElementSibling
// uncomment
// console.log(document.querySelector("#traverse-document").nextElementSibling);

// previousElementSibling

// uncomment
// console.log(
//   document.querySelector("#traverse-document").previousElementSibling
// );
