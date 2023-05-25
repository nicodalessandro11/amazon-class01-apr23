console.log("Callbacks Approach");
console.log("------------------");

// Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando la función original ha terminado, en esencia se autoEJecuta!.
//En JavaScript, las operaciones asíncronas a menudo utilizan callbacks para notificar al código cuando se han completado.

// Callback hell se refiere a un patrón de programación en el que se anidan varios callbacks uno dentro de otro, creando un código difícil de entender y mantener. Esto puede suceder cuando se realizan varias operaciones asíncronas consecutivas y cada una depende del resultado de la anterior.

// Las promesas en JavaScript proporcionan una manera más fácil de manejar la programación asíncrona, al permitir encadenar operaciones asíncronas de manera similar a como se encadenan operaciones síncronas. Esto ayuda a evitar el uso de callbacks anidados y hace que el código sea más legible y fácil de mantener.

// EJEMPLO DE UN CALLBACK HELL
// const unaFuncion = () => {
//   () => {
//       () => {
//           () => {
//               () => {

//             }
//         }
//     };
//   };
// };

const elPadreDecide = (tiempoRevisadoPorElNene) => {
  // Cuerpo de esta funcion
  console.log("EL padre decide que!");
  // 3 opciones ['sunny', 'rainy', 'Unexpected Error']
  if (tiempoRevisadoPorElNene === "sunny") {
    console.log(
      "Ok Hijo, gracias por revisar el tiempo, debido a que hay buen tiempo vamos a pescar!"
    );
  } else if (tiempoRevisadoPorElNene === "rainy") {
    console.log(
      "OK Hijo, gracias por revisar el tiempo,debido a que esta lloviendo, NO podemos ir a pescar! "
    );
  } else {
    console.log(
      "Hijo, que mal que un error externo no te dejo verificar el tiempo. No podemos ir a pescar debido a esto.... para la proxima!"
    );
  }
};

const elHijoChequeaElTiempo = () => {
  // Cuerpo de esta funcion
  // 2 cosas
  // 1 - generamos una var que reciba un array con las 3 opciones que el hijo se encuentre...
  let opcionesPosibles = ["sunny", "rainy", "unexpected error"];
  // 2 - Usaremos el metodo setTimeout() que ensencia, es un callback en si :)
  // Estructura del setTimeout()
  // Recibe 2 args dentro de sus parentesis setTimeout(() => {}, tiempoEnMilisegundos)
  setTimeout(() => {
    // Dividido en 3 partes

    // 1ra parte - generamos logica para un numero ALEATORIO :( ....
    let randomNumber = Math.floor(Math.random() * 3);
    // 2da parte - generamos logica para multiplicar opcionesPosibles[randomNumber]
    let resultado = opcionesPosibles[randomNumber];
    // 3 parte! - divido en 2 partes a/b
    // part a - imprimimos en consola el resultado de la promesa del hijo
    console.log(`Papa, fui a revisar y vi que ${resultado}`);
    // part b - llamamos a la funcion de elPadreDecide()
    elPadreDecide(resultado);
  }, 2000);
};

elHijoChequeaElTiempo();
