/*
Ejercicio 1:
Muestra por consola toda la información de tu pokemon favorito usando la API https://pokeapi.co*/
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => console.log(data));
/*
Ejercicio 2:
Permite al usuario introducir un número entre el 0 y el 151, que son los únicos pokemon que merecen la pena. Devuélvele la info del pokemon con la id correspondiente.
*/
function searchById() {
  const pokemonId = document.getElementById("pokemonId").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
