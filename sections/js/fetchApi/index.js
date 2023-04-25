console.log("Fetch API Class");

// Ejemplo 001 - Llamando a un doc interno con extension .txt
let getText = () => {
  // usamos fetch
  fetch("sample.txt")
    .then((respuesta) => respuesta.text())
    .then(
      (informacionDeRespuesta) =>
        (document.querySelector("#output").innerText = informacionDeRespuesta)
    )
    .catch((error) => console.log(error));
};

// Ejemplo 001 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
document.querySelector("#getText").addEventListener("click", getText);

// Ejemplo 002 - llamando a un doc interno con extension .json - rick&morty
let getJson = () => {
  fetch("users.json")
    .then((response) => response.json())
    .then((rickAndMortyInfo) => {
      console.table(rickAndMortyInfo);
      let userData = "";
      rickAndMortyInfo.forEach((infoFromJson) => {
        userData += `
              <ul>
        <li>${infoFromJson.id}</li>
        <li>${infoFromJson.name}</li>
        <li>${infoFromJson.profession}</li>
    </ul>
              `;
      });
      return (document.querySelector("#output").innerHTML = userData);
    })
    .catch((error) => console.log(error));
};

// Ejemplo 002 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
document.querySelector("#getJson").addEventListener("click", getJson);

// Ejelo 003 - llamando una external PUBLIC API - jsonplaceholder
let getExternalApi = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((respuestas) => {
      console.table(respuestas);
      let infoFromApi = "";
      respuestas.forEach((albumInfo) => {
        infoFromApi += `
              <ul>
        <li>${albumInfo.id}</li>
        <li>${albumInfo.userId}</li>
        <li>${albumInfo.title}</li>
    </ul>
              `;
      });
      return (document.querySelector("#output").innerHTML = infoFromApi);
    })
    .catch((error) => console.log(error));
};

// Ejemplo 003 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
document
  .querySelector("#getExternalApi")
  .addEventListener("click", getExternalApi);

// Ejemplo 004 - Metodo : "POST" - empujando info a  una external PUBLIC API - jsonplaceholder

let addPost = (e) => {
  // Verificacion y "refrescar" conceptos de semana pasada
  e.preventDefault();
  console.log(e);
  console.log("CTA Connected");
  // Vamos a traernos el valor de los inputs del html
  let titleOfUserInput = document.querySelector("#title").value;
  let bodyOfUserInput = document.querySelector("#body").value;
  // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      // SYNTAX DE REFERENCIA de pagina web
      // https://jsonplaceholder.typicode.com/guide/
      //   title: "me gusta comprar mucho los bocatas del mercadona",
      //   body: "guilty pleasures",
      //   userId: 1,

      // ------
      // ------
      // ------
      // ------
      // NUESTRO SYNTAX para conectar los inputs de texto + textArea con esta llamada API
      //nombreDeClave CON la variable que guarda el input.value del dom selection
      title: titleOfUserInput,
      body: bodyOfUserInput,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// Ejemplo 003 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
document.querySelector("#addPost").addEventListener("submit", addPost);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
