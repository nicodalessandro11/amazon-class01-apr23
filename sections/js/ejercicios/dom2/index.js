// Ejercicio 1. Cambio de innerText.
// Creamos un <h1> con un texto de "Todavía no me han modificado". Debajo creamos un botón que contenga el texto que queráis ("Click me", por ejemplo).
// Después tendremos que generar un evento de click. Cuando el user clique el botón, lo que haremos es que vamos a modificar el texto del <h1> de tal manera que sea "Ya me han dado click!".

// Ejercicio 2. Toggle.
// Imaginemos que tenemos un pequeño aparato que se puede encender y apagar con un botón.
// Vamos a crear un <h1> que contendrá el texto "OFF". Debajo colocaremos un botón que contenga el texto "encender". De momento nuestro aparato está apagado.
// A continuación vamos a crear un event listener de click, de tal manera que, cuando el user lo clique, cambie el texto de 'OFF' a 'ON' y el texto del botón de 'encender' a 'apagar'. Esto nos permitiría encender nuestro aparato imaginario, pero también deberemos asegurarnos que, con el mismo evento de click, podemos apagarlo (es decir, volver a setear el valor del <h1> a 'OFF' y el del botón a 'encender').

// Ejercicio 3. Contador.
// Vamos a crear un pequeño contador que sume y reste valores. Primero crearemos un <h1> con un valor inicial de '0'. Después crearemos CUATRO botones: el primero será "Doble click -2", el segundo "Click -1", el tercero "Click +1" y el cuarto "Doble click +2".
// Lo que queremos de estos cuatro botones es que modifiquen el valor del <h1> según como se especifica. Es decir, tendremos dos botones con un evento de doble click que restaran y sumarán 2 al resultado del <h1>, así como otros dos botones con un evento de click que sumarán y restarán 1 al resultado.
// HINT: Recordad que todos los valores dentro de un tag de HTML son cadenas de texto.

// Ejercicio 4. Class Toggle
// Creamos un botón que tenga una clase "green" y un texto como 'I'm green'.
// Cuando el user dé click al botón, deberíamos cambiar el texto del botón por 'I'm red' y su color para que sea rojo.
// Cuando el botón sea rojo y el user le vuelva a dar, deberíamos volver a setearlo a su estado inicial.

// Ejercicio 5. Añadir a listas con inputs - ADVANCED
// Vamos a crear una ordered list que no contenga ningún elemento. Después creamos un input y un botón que contenga el texto "Añadir".
// Cuando el user escriba alguna cosa en el input y le dé a añadir, lo que deberíamos hacer es coger el valor de ese input y añadirlo a nuestra ordered list.
// Bonus: En caso de que el input esté vacío, deberíamos asegurarnos que no se añade una empty string a la lista, y que por ejemplo el input pase a tener un placeholder de 'Por favor, añade un elemento'
