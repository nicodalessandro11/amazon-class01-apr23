/// API - RESTFUL
// Application Programming INterface

// ANALOGIA
// Entendámoslo con el ejemplo del restaurante. Si visitas un lugar para comer, interactúas con el camarero para pedir tu comida.
// Las personas clave aquí son tú (frontend), mesero (restAPI), y la cocina del restaurante (backend).
// Le das tu orden de comida al mesero, esperas por tu orden y te la entregan.

// La primera razón por la que las API son importantes es que su sitio, aplicación o servicio no hace nada sin ellas. Las necesita para procesar un pedido y confirmar el pago si está vendiendo algo. Las necesita para recoger datos si ese es el objetivo de su solución. Un servicio no puede quedarse ahí sin hacer nada. Internet es demasiado interactivo para eso.

// La segunda razón es que las APIs hoy en día están empaquetadas como productos que los desarrolladores pueden utilizar para construir su sitio o aplicación o incluso para añadir valor o una nueva forma de entregar valor para los sistemas que construyes.

// Digamos que quieres vender productos de Amazon en tu sitio. Podrías construir una arquitectura completa para hacerlo. Pero eso llevaría una tonelada de tiempo y esfuerzo. Además, cada vez que Amazon actualizara su sitio, tendrías que hacerlo todo de nuevo.

// En su lugar, Amazon te proporcionará su API. Usted simplemente coloca la API en su código. Entonces, cuando el precio cambia, cambia en su sitio. Se muestra correctamente. Si Amazon cambia su sitio de cualquier manera se actualiza en su extremo. De hecho, es casi seguro que Amazon creó el moderno ecosistema de API cuando se dio cuenta del valor inherente a los componentes comunes que todo el mundo podía utilizar.

// ¿No hace eso tu vida mucho, mucho más simple?

// Hay un montón de APIs así por ahí. Están construidas para que puedas crear un sitio web o una aplicación y enlazar con sus sitios web. Así que si quieres tener Google Maps en tu aplicación no tienes que diseñarla tú mismo. Puedes tomar la API y tener el mapa -y todas sus actualizaciones- en tu aplicación para siempre.

// En definitiva, las API son fáciles de entender. Transmiten datos de un lado a otro en segundo plano. Hacen que la web sea interactiva y útil para la gente. Permiten interactuar con las aplicaciones, los servicios de la televisión inteligente, el coche y otras cosas, y sin embargo nunca se ven. Simplemente funcionan.

// Ahora ya sabes lo que es una API. Lo que no sabes es si la API que estás utilizando funciona correctamente. Porque si no lo está tendrás problemas más adelante.

// ----------------
// ----------------
// ----------------
// ----------------
// ----------------
// ----------------
////// JSON Lesson
// Que es un JSON ?

// JSON === "Javascript Object Notation"
// jSON es un formato de datos estándar basado en texto que se utiliza en el desarrollo web para enviar y recibir datos
// Es usado desde aplicaciones nativas como webApps, API's,  IOT, Video Juegos ,,,,, etc...

/// Tiene una ventaja muy fuerte ya que:
// Es compatible con todos los lenguajes de programación

// Puede utilizarse en todas las plataformas

// Es un estándar de base de datos ligero, por lo que la transmisión de datos es rápida

// Tipos de datos:
// - Strings
// - Numbers
// - Arrays
// - Null
// - Booleanos
// - Objetos

// METODOS ASOCIADOS
// JSON.parse() === toma una cadena json y la convierte en un objeto javascript
// JSON.stringify === convertir un objeto javascript(json) en una cadena JSON (útil para enviar la información por la red)

// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// La fetch API es una interfaz que permite realizar peticiones HTTP asíncronas a servidores desde los navegadores web y que utiliza Promise.

// El método fetch() está disponible en el ámbito global que ordena a los navegadores web enviar una petición a una URL.

// ----- Envío de una solicitud -----

// La función fetch() sólo requiere un parámetro: la URL del recurso que se quiere obtener.

let response = fetch(url);

// El método fetch() devuelve una Promise para que puedas utilizar los métodos then() y catch() para manejarla:

fetch(url)
  .then((response) => {
    // gestiona la respuesta
  })
  .catch((error) => {
    // gestiona el error
  });

// Cuando la solicitud se completa, el recurso está disponible. En este momento, la promesa se resolverá en un objeto Response.

// El objeto Response es la manera como la API nos manda recurso obtenido. El objeto Response tiene una serie de propiedades y métodos útiles para inspeccionar la respuesta.

// ----- Lectura de la respuesta -----

// Si el contenido de la respuesta está en formato de texto sin procesar, puede utilizar el método text(). El método text() devuelve una Promise que se resuelve con el contenido completo del recurso obtenido:

fetch("/readme.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

// En la práctica, a menudo se utiliza el async/await con el método fetch() así:

async function fetchText() {
  let response = await fetch("/readme.txt");
  let data = await response.text();
  console.log(data);
}

// Además del método text(), el objeto Response tiene otros métodos como json()

// ----- Manejo de los códigos de estado de la Respuesta -----

// El objeto Response proporciona el código de estado y el texto de estado a través de las propiedades status y statusText. Cuando una solicitud tiene éxito, el código de estado es 200 y el texto de estado es OK:

async function fetchText() {
  let response = await fetch("/readme.txt");

  console.log(response.status); // OUTPUT: 200
  console.log(response.statusText); // OUTPUT: OK

  if (response.status === 200) {
    let data = await response.text();
    // handle data
  }
}

fetchText();

// Si el recurso solicitado no existe, el código de respuesta es 404:

let response2 = await fetch("/non-existence.txt");

console.log(response.status); // OUTPUT: 400
console.log(response.statusText); // OUTPUT: Not Found

// Si la URL solicitada arroja un error del servidor, el código de respuesta será 500.

// Si la URL solicitada es redirigida a la nueva con la respuesta 300-309, el estado del objeto Response se establece en 200. Además, la propiedad redirected se establece como true.

// La función fetch() devuelve una promesa que rechaza cuando se produce un fallo real, como un tiempo de espera del navegador web, una pérdida de conexión a la red y una violación de CORS.

// ----- HEADERS -----
// Ejemplo adaptado de: https://rapidapi.com/guides/request-headers-fetch
// Los headers son metadatos adicionales pasados a la API para ayudar al servidor a entender qué tipo de solicitud está tratando, por ejemplo "content-type".

// Los headers HTTP permiten a los clientes y a los servidores hablar entre sí y pasar bits de información o instrucciones adicionales. Las cabeceras de solicitud incluyen información adicional enviada por el cliente al servidor. Suelen contener instrucciones sobre los datos requeridos e información sobre el cliente. El servidor puede utilizar estas cabeceras para personalizar la respuesta. Algunos ejemplos de cabeceras de solicitud son

// Content-Type
// Authentication y Authorization
// Encoding

// Ejemplo para setear los request headers

//  - 1: Primero de todo necesitamos una API que contenga data con la que podamos trabajar ('https://jsonplaceholder.typicode.com/').
// - 2: Creamos un archivo html donde linkear nuestro script.
// - 3: Para establecer el request header de la API en fetch, pasamos un objeto como segundo parámetro al método fetch. El objeto necesitará una key de headers cuyo valor será otro objeto. Este objeto contendrá todos los headers de la solicitud de la API.

fetch(`API-ENDPOINT`, {
  headers: {},
});

// - 4: El header Content-Type se utiliza para indicar el tipo de medio original del recurso (antes de cualquier codificación de contenido aplicada para el envío). En este caso, como sabemos que la data que vamos a recibir es en formato JSON, podríamos añadir los siguientes headers a nuestro fetch:

fetch(`https://jsonplaceholder.typicode.com/posts`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
