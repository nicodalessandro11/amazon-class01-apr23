![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Algoritmos Básicos

¡Bienvenido a tu primer ejercicio del bootcamp en Ironhack!

El objetivo de este ejercicio es que te familiarices con las estructuras de datos primitivas en JavaScript, que acabamos de cubrir en la clase. Siéntete libre de referirte a los materiales de la clase y no te limites, sino sé curioso y utiliza Google para explorar múltiples soluciones.

¿Preparado?

## Introducción

Para esta actividad __de programación en pareja__ vamos a hacer que ambas personas trabajen en sus propios repos. Al final del ejercicio, ambos estudiantes deberían tener código idéntico en sus respectivos repos.

¿Listo para empezar?

## Requisitos

- Haz un fork de este repo
- Clona este repositorio
- Escribe esto en la _pestaña de archivos_ (panel izquierdo)

  ```javascript
  console.log("¡Estoy listo!");
  ```
- Guardar
- Abre un terminal y navega hasta el directorio donde se encuentra el archivo de script, luego emite el siguiente comando `node js/index.js`
- Si puedes ver el mensaje en el panel de la terminal (abajo), ¡realmente estás listo!

- __Después de la primera iteración, o más tarde en cualquier momento, o una vez que termines, sigue los pasos para el envío.__

## La presentación

Al terminar, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Cree una solicitud de extracción para que sus tutores puedan comprobar su trabajo.

_Deberías hacer un PR (siglas de Pull Request) tan pronto como hagas cualquier cambio significativo. No deberías esperar hasta que hayas terminado completamente con este o cualquier otro ejercicio para hacer el PR. Después de hacer el primer PR, cualquier otra vez que empujes los cambios (siguiendo los tres pasos anteriores), tu cambio aparecerá automáticamente en el PR y tus TAs podrán comprobarlo._

<!-## Submission -->

<!-- When you are done and you have checked that everything works fine, click on the **Share** button and copy the link from the *Share Link* field. Send this link to your TAs so they can check up your work.
![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b2aa98f91affe5d4c5f12f216b069184.png) -->

## Instrucciones

### Iteración 1: Nombres y entradas

  1.1 Cree una variable `hacker1` con el nombre del controlador. <br>
  1.2 Imprimir `"El nombre del conductor es XXXX"`.<br>
  1.3 Cree una variable `hacker2` con el nombre del navegador.<br>
  1.4 Imprimir `"El nombre del navegante es YYYY"`.

### Iteración 2: Condicionales

2.1. Dependiendo de qué nombre [es más largo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), imprima:

<br/>

  - `El conductor tiene el nombre más largo`, tiene XX caracteres. o<br/>
  - `Parece que el navegante tiene el nombre más largo, tiene XX caracteres.` o<br/>
  - `¡Vaya, ambos tienen nombres igual de largos, XX caracteres!`.

### Iteración 3: Loops

  3.1 Imprime todos los caracteres del nombre del conductor, separados por un espacio y [en mayúsculas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), por ejemplo `"J O H N"`
  3.2 Imprima todos los caracteres del nombre del navegador, en orden inverso.es decir, " `nhoJ`"
  3.3 Según el [orden lexicográfico](https://en.wikipedia.org/wiki/Lexicographical_order) de las cadenas, imprime:
  <br/>
  
  - `El nombre del conductor va primero.`<br/>
  - `Yo, el navegador va primero definitivamente.`<br/>
  - `¿Qué? ¿Los dos tienen el mismo nombre?`

### ¡Hora de la bonificación!

#### Bono 1:

Ve al [generador de lorem ipsum](http://www.lipsum.com/) y:

  - Generar 3 párrafos. Guarda el texto en una variable de tipo cadena.
  - Haz que tu programa cuente el número de palabras de la cadena.
  - Haz que tu programa cuente el número de veces que aparece la palabra latina [`et.`](https://en.wiktionary.org/wiki/et#Latin)

#### Bono 2:

Crea una nueva variable `phraseToCheck` y haz que contenga algún valor de cadena. Escribe un código que compruebe si el valor que asignamos a esta variable es un [palíndromo](https://en.wikipedia.org/wiki/Palindrome). Aquí hay algunos ejemplos de palíndromos:

- "Un hombre, un plan, un canal, ¡Panamá!"
- "Amor, Roma"
- "coche de carreras"
- "apilar gatos"
- "pisar no mascotas"
- "gato de taco"
- "ponlo"
- "¿Era un coche o un gato lo que vi?" y "No hay 'x' en Nixon".

__Sugerencia__: Si utilizas Google para ayudarte a encontrar la solución a esta iteración, puede que te encuentres con algunas soluciones que utilizan métodos avanzados de cadenas o matrices (como _join()_, _reverse()_, etc.). Sin embargo, trata de aplicar los conocimientos que tienes actualmente ya que puedes construir una solución bastante buena con sólo usar el bucle `for`, las sentencias `if-else` con algunos `break` y `continue`... Solo digo que :smiley:

## Recursos extra

- [Cadena - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [si - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

__Feliz codificación!__ :heart: