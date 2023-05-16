console.log("Usando Promesas");
console.log("------------------");

// Usando promesas

// Como a alternativa a callbacks, ES6 introdujo las promesas a JS.

// Las promesas en JavaScript son un mecanismo para manejar la programación asíncrona. Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Proporcionan una interfaz para encadenar operaciones asíncronas de manera similar a como se encadenan operaciones síncronas.
// Se utilizan para evitar el uso de callbacks anidados (callback hell) y para tener un control más sencillo de los errores.

// Idea es sencilla, es un metodo nuevo de JS  que contiene 2 funciones dentro

// 1ra Funcion - Resuelve / Resolve - Se llama cuando una tarea es exitosa(couando el hijo suba al arbol y revisa el estado del tiempo. Independiente del estado del tiempo.)

// 2do Funcion = Rechaza . Rejects - se llama cuando nos encontramos con cualquiere error (el hijo nunca se pudo subir al arbol)

// Hijo - Function
const elHijoChequeaElTiempo = new Promise((resolve, reject) => {
  let opcionesPosibles = ["sunny", "rainy", "unexpected error"];
  let randomNumber = Math.floor(Math.random() * 3);
  let resultado = opcionesPosibles[randomNumber];
  console.log(`Papa, fui a revisar y vi que ${resultado}`);

  // Promesas se efectuan aca :)
  if (resultado === "sunny" || resultado === "rainy") {
    resolve(resultado);
  } else {
    reject(new Error("Papa no pude revisar el tiempo....")) &&
      console.log("Papa no pude revisar el tiempo....");
  }
});

// El padre decide function

const elPadreDecide = elHijoChequeaElTiempo.then((tiempoRevisadoPorElNene) => {
  if (tiempoRevisadoPorElNene === "sunny") {
    console.log(
      "Ok Hijo, gracias por revisar el tiempo, debido a que hay buen tiempo vamos a pescar!"
    );
  } else if (tiempoRevisadoPorElNene === "rainy") {
    console.log(
      "OK Hijo, gracias por revisar el tiempo,debido a que esta lloviendo, NO podemos ir a pescar! "
    );
  } else {
    console.log("Veo que mi hijo no pudo revisar y hay un error....");
  }
});
