console.log("Connected...");

// Ejemplo 001 - LLamando a un recurso/archivo local tipo .txt a traves de fetch()
let getText = () => {
  // dependender del metodo fetch + promisas tipo .then() y un catch()
  fetch("./recursos/sample.txt")
    .then((respuestaDelRecursoTipoTextoLocal) =>
      respuestaDelRecursoTipoTextoLocal.text()
    )
    .then((informacionLimpia) => {
      console.log(informacionLimpia);
      document.querySelector("#output").innerText = informacionLimpia;
    })
    .catch((error) => console.log(error));
};

document.querySelector("#getText").addEventListener("click", getText);

// Ejemplo 002 -  LLamando a un recurso/archivo local tipo .json a traves de fetch()
// Depender del metodo json() para limpiar y parsear el tipo de recurso a un formato que podamos usar en JS
let getJson = () => {
  // 1ro - llamamos al recurso en este caso un recurso/archivo tipop json()
  fetch("./recursos/users.json")
    // 2do limpiamos el recurso a traves de un metodo nativo === json()
    .then((infoDeRickMortyNoLimpia) => infoDeRickMortyNoLimpia.json())
    // 3ro - vamos a usar DOM manipulation para injectar la info dentro del HTML
    .then((infoDeRickMortyLimpia) => {
      console.table(infoDeRickMortyLimpia);
      // definimos una variable vacial que usaremos despues como contenedor general!
      let infoDeJson = "";
      infoDeRickMortyLimpia.forEach((cadaPocisionDeArrayRickMorty) => {
        infoDeJson += `
            <ul>
                <li>${cadaPocisionDeArrayRickMorty.id}</li>
                <li>${cadaPocisionDeArrayRickMorty.name}</li>
                <li>${cadaPocisionDeArrayRickMorty.profession}</li>
            </ul>
            `;
      });
      let domInsertion = (document.querySelector("#output").innerHTML =
        infoDeJson);
      return domInsertion;
    })
    // 4to - aprovechamos el metodo extra relacionado al fetch que es catch() para registrar algo en consola si hay un rechazo a la llamada al recurso/archivo
    .catch((error) => console.log(error));
};
document.querySelector("#getJson").addEventListener("click", getJson);

// Ejemplo 003 - LLamando a un recurso/archivo en linea tipo .json a traves de fetch()
// url que usaremos === https://jsonplaceholder.typicode.com/posts
// Depender del metodo json() para limpiar y parsear el tipo de recurso a un formato que podamos usar en JS
// Usando async await
let getInfoExternalApi = async () => {
  await fetch("https://jsonplaceholder.typicode.com/albums")
    .then((infoDeJsonExterna) => infoDeJsonExterna.json())
    .then((infoDeJsonExternaLimpia) => {
      console.log(infoDeJsonExternaLimpia);
      // USAR DOM para insertar info del json dentro del documento
      let infoEstructurada = "";
      infoDeJsonExternaLimpia.forEach((album) => {
        infoEstructurada += `
              <div class="jsonInfo">
              <ul>
                <li>${album.id}</li>
                <li>${album.title}</li>
                <li>${album.userId}</li>
              </ul>
              </div>
              `;
      });
      let infoReadyForDoc = (document.querySelector("#output").innerHTML =
        infoEstructurada);
      return infoReadyForDoc;
    })
    .catch((error) => console.log(error));
};
document
  .querySelector("#getExternalApi")
  .addEventListener("click", getInfoExternalApi);
