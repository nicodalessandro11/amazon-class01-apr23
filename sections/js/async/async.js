console.log("Async Class");

// Usando Async Await

// Es una funcion que basicamente espera por la respuesta de otr funcion, o mas abstracto es un logica que esepra por  otra logica.

// En nuestro caso, el papa esperara por lo que ve el hijo!!!
// Podemos asumir que el papa es asyncrono y el hijo es la promesa? ??

/// Dentro de la funcion asyncrona que en este caso es el papa, usaremos el keyword ASYNC y ""AWAIT" y como esto es syntax de JS, el lenguaje lo reconoce.

const sonChecksWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
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
  }, 2000);
});

// SYNTAX
//const nameOfFunction = async () => {}

const fatherWillDecide = async () => {
  const weather = await sonChecksWeather;

  if (weather === "Sunny") {
    console.log("I have decided that we are going fishing!!!");
  } else if (weather === "Rainy") {
    console.log(
      "Son since you were not able to see the weather, I have decided to stay at home and just chill..."
    );
  }
};

fatherWillDecide();
