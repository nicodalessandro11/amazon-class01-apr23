console.log("Promises");

// Usando promesas

// Como a alternativa a callbacks, ES6 introdujo las promesas a JS.

// Las promesas en JavaScript son un mecanismo para manejar la programación asíncrona. Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Proporcionan una interfaz para encadenar operaciones asíncronas de manera similar a como se encadenan operaciones síncronas.
// Se utilizan para evitar el uso de callbacks anidados (callback hell) y para tener un control más sencillo de los errores.

// Idea es sencilla, es un metodo nuevo de JS  que contiene 2 funciones

// 1ra Funcion - Resuelve / Reolve - Se llama cuando una tarea es exitosa(couando el hijo suba al arbol y revisa el estado del tiempo. Independiente del estado del tiempo.)

// 2do Funcion = Rechaza . Rejects - se llama cuando nos encontramos con cualquiere error (el hijo nunca se pudo subir al arbol)

// const sonChecksWeather = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let possibleOutcome = ["Sunny", "Rainy", "Anaconda Error"];
//     let randomNumber = Math.floor(Math.random() * 3);
//     const result = possibleOutcome[randomNumber];
//     console.log(
//       `Dad I went to check the weather and the weather today is: ${result}`
//     );

//     // PROMESAS SE ACTUAN ACA:
//     if (result === "Sunny" || result === "Rainy") {
//       resolve(result);
//     } else {
//       reject(
//         new Error(
//           "Dad I could not get up the tree and I could check the weather, sorry....."
//         ) &&
//           console.log(
//             "Dad I could not get up the tree and I could check the weather, sorry....."
//           )
//       );
//     }
//   }, 2000);
// });

const sonChecksWeather = new Promise((resolve, reject) => {
  let possibleOutcome = ["Sunny", "Rainy", "Anaconda Error"];
  let randomNumber = Math.floor(Math.random() * 3);
  const result = possibleOutcome[randomNumber];
  console.log(
    `Dad I went to check the weather and the weather today is: ${result}`
  );

  // PROMESAS SE ACTUAN ACA:
  if (result === "Sunny" || result === "Rainy") {
    resolve(result);
  } else {
    reject(
      new Error(
        "Dad I could not get up the tree and I could check the weather, sorry....."
      ) &&
        console.log(
          "Dad I could not get up the tree and I could check the weather, sorry....."
        )
    );
  }
});

const fatherWillDecide = sonChecksWeather.then((weather) => {
  if (weather === "Sunny") {
    console.log("I have decided that we are going fishing!!!");
  } else {
    console.log(
      "It's going to rain so, I have decided that we are staying in playing playstation!"
    );
  }
});
