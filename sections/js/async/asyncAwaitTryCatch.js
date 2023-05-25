console.log("Usando Async Await - Usando un Try & Catch");
console.log("------------------");

const elHijoChequeaElTiempo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let opcionesPosibles = ["sunny", "rainy", "cloudy", "unexpected error"];
    let randomNumber = Math.floor(Math.random() * 4);
    let resultado = opcionesPosibles[randomNumber];
    console.log(`Papa, fui a revisar y vi que ${resultado}`);

    // Promesas se efectuan aca :)
    if (
      resultado === "sunny" ||
      resultado === "rainy" ||
      resultado === "cloudy"
    ) {
      resolve(resultado);
    } else {
      reject(new Error("Papa no pude revisar el tiempo....")) &&
        console.log("Papa no pude revisar el tiempo....");
    }
  }, 1000);
});

// USANDO EL CONSTRUCTOR
// ASYNC && AWAIT
// Usando un Try-Catch

const elPadreDecide = async () => {
  try {
    let tiempoChequeadoPorHijo = await elHijoChequeaElTiempo;
    if (tiempoChequeadoPorHijo === "sunny") {
      console.log(
        "Ok Hijo, gracias por revisar el tiempo, debido a que hay buen tiempo vamos a pescar!"
      );
    } else if (tiempoChequeadoPorHijo === "cloudy") {
      console.log(
        "Ok Hijo, gracias por revisar el tiempo, debido a que esta nubloso, no vamos a pescar"
      );
    } else {
      ("OK Hijo, gracias por revisar el tiempo,debido a que esta lloviendo, NO podemos ir a pescar! ");
    }
  } catch (error) {
    console.log(error);
  }
};
elPadreDecide();
