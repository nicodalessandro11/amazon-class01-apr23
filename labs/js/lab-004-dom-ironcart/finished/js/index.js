// ITERATION 1

function updateSubtotal(product) {
  // Nos conectamos mediante variables a los elementos de precio y cantidad de nuestro html
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  //console.log(price, quantity);

  // Extraer el valor del precio  :)
  let priceValue = parseFloat(price.innerText);
  // Recibiendo el valor inputado por poarte del usuario dentro del input :)
  let quantityValue = quantity.value;

  // Variable que se encarga de mutiplicar bvalores de precio+cantidad
  let subTotalValue = priceValue * quantityValue;

  // variable que apunta mediante logica de documento al contendeor corrrespondiente dentro del html
  let subTotalContainer = product.querySelector('.subtotal span');

  // apuntamos al contendeor y le concatenamos el valor de la operacion que recibimos en la variable subtotalvalue
  subTotalContainer.innerText = subTotalValue;
  // retornamos el subtotal para poder usarlo :)
  return subTotalValue;
}

function calculateAll() {
  // Buscar manera de seleccionar son todos los Elementos de lka lista/carrito
  let products = document.getElementsByClassName('product');

  // declarar una variable que usaremos para guardar el valor de cada iteracion de cada productro. Esta variable pro defecto la inicializamos en 0
  let totalValue = 0;
  // Iterar en base a cada elemento/producto dentro del doc mediante la var "products" , dentro del body de este bucle procederemos a sumar el valor que nos de la funcion updateSubtotal + totalVlue
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  // accionar en el dom, porque tenemos
  document.querySelector('#total-value span').innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // Verifciar que esta conectada la funcion post creacion del eventListener dentro del Window object
  console.log('The target in remove is:', target);

  // Usamos el parentNode para apuntar al ABUELO de row que contiene el evento especifico que estamos apuntando casualmente el abuelo de este evento es el elemento TR con la clase product.
  let row = target.parentNode.parentNode;
  console.log(row);

  // Usamos el parentNode en la variable row para aprovechar los selectores de manioluacion del DOM para eliminar el hijo de parent.
  let parent = row.parentNode;
  console.log(parent);

  // llamamos a parent con el metodo removeChild y le pasamos la variable row dentro del metodo.
  parent.removeChild(row);

  // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto.
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Parte 1 - Segmentacion de data proporcionada por el usario
  let elementRow = document.querySelector('.create-product');
  let newProdNameInput = elementRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  console.log(newProdNameValue);
  let newProdPriceInput = elementRow.querySelector('#number');
  let newProdPriceValue = Number(newProdPriceInput.value);
  console.log(newProdPriceValue);

  // P{arte 2 - Creacion del elemento como tal}
  let newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
  <td class="name">
            <span>${newProdNameValue}</span>
          </td>
          <td class="price">
            $
            <span>${newProdPriceValue}</span>
          </td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;

  // Parte 3
  let parentCont = document.querySelector('#cart tbody');
  parentCont.appendChild(newTableRow);

  // Part 4
  let removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Part 5 - Limpiar de nuevo los inputs
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // Ejercicio 4 - Logica para apuntar a los botones de remove dentro del Document
  let removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  // Ejercicio 5 - Logica para habilitar la creacion de productos a traves del DOM
  let createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
