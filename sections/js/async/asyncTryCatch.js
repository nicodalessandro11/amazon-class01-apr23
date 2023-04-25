console.log("Async Try Catch - Approach");

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
      reject();
      new Error(
        "Dad I could not get up the tree and I could check the weather, sorry....."
      ) &&
        console.log(
          "Dad I could not get up the tree and I could check the weather, sorry....."
        );
    }
  }, 2000);
});

const fatherWillDecide = async () => {
  try {
    const weather = await sonChecksWeather;
    if (weather === "Sunny") {
      console.log("I have decided that we are going fishing!!!");
    } else if (weather === "Rainy") {
      console.log(
        "Son since you were not able to see the weather, I have decided to stay at home and just chill..."
      );
    }
  } catch (error) {
    console.log(error);
  }
};

fatherWillDecide();
