// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (paso) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${paso}</li>`;
    // vamos a efectuar la misma funcion con cambios para recibir el prox paso
    // Callback paso - 2
    getInstruction(
      "mashedPotatoes",
      1,
      //  () => {} // callback
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;
        // vamos a efectuar la misma funcion con cambios para recibir el prox paso
        // Callback paso - 3
        getInstruction(
          "mashedPotatoes",
          2,
          //  () => {} // callback
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;
            // vamos a efectuar la misma funcion con cambios para recibir el prox paso
            // Callback paso - 4
            getInstruction(
              "mashedPotatoes",
              3,
              //  () => {} // callback
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;
                // vamos a efectuar la misma funcion con cambios para recibir el prox paso
                // Callback paso - 5
                getInstruction(
                  "mashedPotatoes",
                  4,
                  //  () => {} // callback
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step}</li>`;
                    // vamos a efectuar la misma funcion con cambios para recibir el prox paso
                    // Callback paso - 4
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      //  () => {} // callback
                      (step) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step}</li>`;
                        // logica para eliminar el atributo "HIDDEN" de el elemento tipo img que contiene la img
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 1000);
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// const makeBroccoli = async () => {
//   // Queremos depender de una variable para poder apuntar a la funcion de obtainInstruction() para poder pasarle el tipo de comida + pocisionDeLista
//   // Paso 0
//   let paso0 = await obtainInstruction("broccoli", 0);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso0}</li>`;
//   // Paso 1
//   let paso1 = await obtainInstruction("broccoli", 1);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso1}</li>`;
//   // Paso 2
//   let paso2 = await obtainInstruction("broccoli", 2);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso2}</li>`;
//   // Paso 3
//   let paso3 = await obtainInstruction("broccoli", 3);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso3}</li>`;
//   // Paso 4
//   let paso4 = await obtainInstruction("broccoli", 4);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso4}</li>`;
//   // Paso 5
//   let paso5 = await obtainInstruction("broccoli", 5);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso5}</li>`;
//   // Paso 6
//   let paso6 = await obtainInstruction("broccoli", 6);
//   document.querySelector("#broccoli").innerHTML += `<li>${paso6}</li>`;
//   // Paso 7 - Puesto a pelo / hardCoded
//   setTimeout(() => {
//     document.querySelector(
//       "#broccoli"
//     ).innerHTML += `<li>Broccoli is ready</li>`;
//     document.querySelector("#broccoliImg").removeAttribute("hidden");
//   }, 1000);
// };
// makeBroccoli();

//  Iteration 3 using async/await & a try/catch
const makeBroccoliTryCatch = async () => {
  try {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
    setTimeout(() => {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>Broccoli is ready</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    }, 1000);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
makeBroccoliTryCatch();

// Bonus 2 - Promise all
// Bono 2 - Usando un async/await + try/catch
let paso0 = obtainInstruction("brusselsSprouts", 0);
let paso1 = obtainInstruction("brusselsSprouts", 1);
let paso2 = obtainInstruction("brusselsSprouts", 2);
let paso3 = obtainInstruction("brusselsSprouts", 3);
let paso4 = obtainInstruction("brusselsSprouts", 4);
let paso5 = obtainInstruction("brusselsSprouts", 5);
let paso6 = obtainInstruction("brusselsSprouts", 6);
let paso7 = obtainInstruction("brusselsSprouts", 7);

// const makeBrusselsSprouts = async () => {
//   try {
//     // Vamos a crear una variable que dentro dependa de la palabra await y usaremos el constructor de Promise en conjunto un metodo que se llama Promise.all() y dentro de este metodop vamos a decalrar un array con los 7 pasos recuerden que es un array y contamos desde 0 que provienen del array de BrusselSprouts.
//     let valores = await Promise.all([
//       paso0,
//       paso1,
//       paso2,
//       paso3,
//       paso4,
//       paso5,
//       paso6,
//       paso7,
//     ]);
//     valores.forEach((pocisionIndividualDelArray) => {
//       console.log(pocisionIndividualDelArray);
//       document.querySelector(
//         "#brusselsSprouts"
//       ).innerHTML += `<li>${pocisionIndividualDelArray}</li>`;
//     });
//     setTimeout(() => {
//       document.querySelector(
//         "#brusselsSprouts"
//       ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
//       document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//     }, 1000);
//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// };
// makeBrusselsSprouts();

// Usandso promesas sin async/await y usando dependencia del metodo .then()
const brusselSproutsPromiseAll = () => {
  Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7])
    // Usamos esta primera dependencia del metodo .then() para iterar sobre todas las promesas que queremos comprometer :)
    .then((arrayDePasos) => {
      // Iteramos el array con un metodo forEach()
      arrayDePasos.forEach((pasoIndividual) => {
        console.log(pasoIndividual);
        // DOM Manipulation para insertar cada paso del array dentro del doc
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${pasoIndividual}</li>`;
      });
      // Utilizamos temporizador para pasar elemento <li> + quitamos atributo de hidden de la img
      setTimeout(() => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      }, 1000);
    });
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
};
brusselSproutsPromiseAll();
