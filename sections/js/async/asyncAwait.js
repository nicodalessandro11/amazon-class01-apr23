console.log("Usando Async Await");
console.log("------------------");

// Usando Async Await

// Es una funcion que basicamente espera por la respuesta de otr funcion, o mas abstracto es un logica que esepra por  otra logica.

// En nuestro caso, el papa esperara por lo que ve el hijo!!!
// Podemos asumir que el papa es asyncrono y el hijo es la promesa? ??

/// Dentro de la funcion asyncrona que en este caso es el papa, usaremos el keyword ASYNC y ""AWAIT" y como esto es syntax de JS, el lenguaje lo reconoce.

const elHijoChequeaElTiempo = new Promise((resolve, reject) => {
  setTimeout(() => {
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
  }, 5000);
});

// USANDO EL CONSTRUCTOR
// ASYNC && AWAIT
const elPadreDecide = async () => {
  let tiempoChequeadoPorHijo = await elHijoChequeaElTiempo;

  if (tiempoChequeadoPorHijo === "sunny") {
    console.log(
      "Ok Hijo, gracias por revisar el tiempo, debido a que hay buen tiempo vamos a pescar!"
    );
  } else {
    console.log(
      "OK Hijo, gracias por revisar el tiempo,debido a que esta lloviendo, NO podemos ir a pescar! "
    );
  }
};
elPadreDecide();
