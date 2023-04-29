console.log("heloo");

let hackerOne = "emilio";
let hackerTwo = "Emilio";

console.log(`El nombre del conductor es ${hackerOne}`);
console.log(`El nombre del navegante es ${hackerTwo}`);

console.log(hackerOne.length);
console.log(hackerTwo.length);

console.log("Cual variable contiene el nombre mas largo?");

// hacker 1 mas largo
if (hackerOne.length > hackerTwo.length) {
  console.log(
    `El conductor '${hackerOne}' tiene el nombre más largo y tiene ${hackerOne.length} caracteres`
  );
}
// hacker 2 mas largo
else if (hackerOne.length < hackerTwo.length) {
  console.log(
    `Parece que el navegante "${hackerTwo}" tiene el nombre más largo, tiene ${hackerTwo.length} caracteres.`
  );
}
// ambos tienen la misma cantidad de pocisiones
else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos,${hackerOne.length} caracteres!`
  );
}
