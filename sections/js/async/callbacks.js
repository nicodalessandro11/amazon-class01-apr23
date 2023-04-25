console.log("Callbacks Approach");

// Usando Callbacks

// Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando la función original ha terminado. En JavaScript, las operaciones asíncronas a menudo utilizan callbacks para notificar al código cuando se han completado.

// Callback hell se refiere a un patrón de programación en el que se anidan varios callbacks uno dentro de otro, creando un código difícil de entender y mantener. Esto puede suceder cuando se realizan varias operaciones asíncronas consecutivas y cada una depende del resultado de la anterior.

// Las promesas en JavaScript proporcionan una manera más fácil de manejar la programación asíncrona, al permitir encadenar operaciones asíncronas de manera similar a como se encadenan operaciones síncronas. Esto ayuda a evitar el uso de callbacks anidados y hace que el código sea más legible y fácil de mantener.

// 3 possible outcomes ["Sunny", "Rainy", "Unexpected Error"];
const fatherWillDecide = (weather) => {
  console.log(`Father Says that!`);
  if (weather === "Sunny") {
    console.log(`I have decided that we are going fishing!!!`);
  } else if (weather === "Rainy") {
    console.log(
      `It's going to rain so, I have decided that we are staying in playing playstation!`
    );
  } else {
    console.log(
      `Son since you were not able to see the weather, I have decided to stay at home and just chill...`
    );
  }
};

const sonChecksWeatcher = () => {
  let possibleOutcome = ["Sunny", "Rainy", "Anaconda Error"];
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    const result = possibleOutcome[randomNumber];
    console.log(
      `Dad I went to check the weather and the weather today is: ${result}`
    );
    fatherWillDecide(result);
  }, 4000);
};

sonChecksWeatcher();
