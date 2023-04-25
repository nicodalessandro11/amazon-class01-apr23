// FETCH METHOD

// El método fetch() en JavaScript es una forma de hacer peticiones HTTP (como una petición AJAX) para obtener recursos del servidor. Es un método incorporado en JavaScript y es parte de la especificación de promesas. Un ejemplo de su uso sería:

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
// .then((data) => console.table(data));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

//   En este ejemplo, se está haciendo una petición GET a la URL especificada, luego se está tomando la respuesta y se está convirtiendo en un objeto JSON, finalmente se está imprimiendo en consola.

//   Una de las principales ventajas de usar el método fetch() es que es fácil de usar y se integra bien con otras características de JavaScript, como las promesas. Además, es compatible con navegadores modernos y proporciona una forma estándar de hacer peticiones HTTP en JavaScript.

// HTTP REQUESTS

// Los métodos HTTP (Hypertext Transfer Protocol) son los verbos utilizados para indicar la acción deseada a realizar en un recurso en una petición HTTP. Los métodos más comunes son:

// GET: Utilizado para obtener información de un recurso. Este es el método utilizado por defecto cuando se hace una petición HTTP sin especificar un método.

// POST: Utilizado para enviar información a un recurso para ser procesada. Por ejemplo, se puede utilizar para enviar un formulario a un servidor.

// PUT: Utilizado para actualizar un recurso existente.

// DELETE: Utilizado para eliminar un recurso existente.

// HEAD: Similar a GET, pero solo regresa los encabezados de la respuesta, no el cuerpo.

// OPTIONS: Utilizado para obtener información sobre las opciones de un recurso.

// En una petición HTTP, el método se especifica en la primera línea de la petición, seguido de la URL y la versión del protocolo. Por ejemplo, en una petición GET a https://example.com, la primera línea sería "GET / HTTP/1.1".

// En una respuesta HTTP, el servidor indica el estado de la petición mediante un código de estado numérico. Los códigos de estado comunes incluyen 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, entre otros.

// JSON EXPLANATION

// JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos. Se utiliza para representar objetos de manera similar a como se haría en JavaScript, con pares clave-valor y una estructura jerárquica. Es un formato independiente del lenguaje, lo que significa que se puede utilizar en cualquier lenguaje de programación que tenga una biblioteca para trabajar con JSON.

// Uno de los principales beneficios de usar JSON es su facilidad de lectura y escritura tanto para personas como para programas. Es fácil de analizar y generar para máquinas, y es fácil de leer y escribir para personas. Además, es un formato de texto plano, lo que lo hace fácil de enviar a través de redes y de almacenar en archivos.

// JSON es muy popular en el desarrollo web, especialmente en aplicaciones que requieren la comunicación entre el cliente y el servidor. Es el formato de elección para el intercambio de datos en aplicaciones web modernas y se utiliza a menudo en conjunción con el protocolo HTTP y el método fetch() de JavaScript para hacer peticiones AJAX.

// Otro beneficio es que es muy compatible con el lenguaje javascript, ya que es un formato nativo de javascript, es fácil de convertir un objeto javascript en un json y viceversa.

// En resumen, JSON es un formato de intercambio de datos popular debido a su facilidad de uso y su compatibilidad con múltiples lenguajes de programación, es especialmente útil para el desarrollo web y para la comunicación entre el cliente y el servidor.
