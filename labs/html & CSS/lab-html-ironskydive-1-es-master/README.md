![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Ejercicio guiado - IronSkydive 💪 - elementos de nivel de bloque y en línea

<br/>

## Introducción

Durante este módulo, te familiarizarás con HTML y CSS. Ambas tecnologías combinadas te ofrecen todas las herramientas que necesitas para crear un sitio web. HTML sin CSS es feo, y CSS sin HTML es... bueno, ¡nada!

Por eso trabajarás en este ejercicio en múltiples ocasiones durante este módulo. Nuestro objetivo final es crear un sitio web básico de HTML y CSS, donde practicarás los distintos conceptos a medida que los vayas aprendiendo.

<br/>

## IronSkydive | El sitio web de la empresa

A Ironhack le encanta la codificación, pero también nos gusta practicar deportes extremos. En una nueva línea de productos, hemos creado una nueva empresa llamada _IronSkydive_. Ofrecemos una experiencia completa de paracaidismo.

Esperamos que puedas ayudarnos a crear nuestra página web porque estamos desbordados al empezar la empresa y asegurarnos de que todos nuestros papeles están alineados con las normas. :see:

Como hemos mencionado antes, trabajarás en este ejercicio a lo largo de las próximas lecciones, pero al final, tu objetivo es:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1f30ebb21258466ca36702d7cdaa0cad.png)

<br/>

Estarás trabajando en una nueva pluma, así que procede a [CodePen](https://codepen.io/) y crea una nueva pluma ahora. ¿Listo para dar el salto?

<br/>

![](https://media.giphy.com/media/xT5LMrGIfLuDtRSAMg/giphy.gif)

<br/>

### Parte 1 - Elementos de bloque

En esta parte del ejercicio, vas a trabajar con los elementos de bloque que has aprendido. Has visto cómo los elementos de bloque semánticos nos ayudan a entender mejor la composición de nuestro sitio web. Vamos a empezar creando la estructura básica de HTML, que será la siguiente:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8f778c8cd703db596d5bb22dae089716.jpg)

<br/>

Más adelante, en el ejercicio, vamos a distinguir entre las diferentes secciones que tenemos. Ahora, vamos a añadir algunos elementos de bloque más dentro de cada elemento.

### Nav

Dentro de`<nav>`, crea una etiqueta `<ul>`con tres elementos:

- Day Structure
- Team 
- Schedule

Estas van a ser nuestras opciones de menú.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ace26745798b17492d307e0d0c817ea4.png)

<br/>

### Encabezado

Tienes que crear dos cosas diferentes aquí:

- primero, crear una etiqueta`<h1>` con el texto "IronSkydive", luego
- debajo de esta etiqueta, crear una etiqueta `h2` c on el texto "Que empiece el viaje" y finalmente
- debajo de estas etiquetas, crea una etiqueta`<aside>` que contendrá una cita.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3c0c7f97d3804c728475f52c89f0ec85.png)

<br/>

### Sección 1

Esta sección tiene un fondo oscuro que cubrirá todo el ancho de la web. Más adelante añadirás el color al fondo, así que por ahora no hay que preocuparse por esto.

Contendrá tres etiquetas`<article>`para añadir la información bajo la cabecera.

Dentro de cada`<article>`, añade una etiqueta`<h3>`para los diferentes títulos, y un párrafo para el texto blanco. El resultado sería algo así:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_f004e36a2b2bb0dfc02ac008e5d5c97e.png)

<br/>

### Sección 2

Esta sección es bastante similar a la anterior. En este caso, la sección contendrá un título`<h3>`con el texto "¿Cómo estructuramos el día?", y a continuación un `<div>` con cuatro etiquetas `<article>` diferentes.

Dentro de cada etiqueta de _artículo_, de momento, vamos a tener una etiqueta`<h4>`con el título del artículo, y una etiqueta `<p> `con el contenido del mismo.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c810d2f904e4c4e72ad8b9ed055e4b37.png)

<br/>

### Sección 3

Este caso es el mismo que el de la **sección 1**: tendrá un fondo oscuro y, al igual que en las secciones anteriores, tienes que añadir un título `<h3>` y una `<p>` con una breve descripción.

Después, crearás la etiqueta `<div>` y añadirás tres etiquetas `<article>` vacías que contendrán la información de cada miembro del equipo. Es suficiente con un texto que indique los diferentes artículos:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4bf21e881db9707b671a812c022db35f.png)

<br/>

### Sección 4

En esta sección, tenemos una tabla que contiene el calendario.

Empecemos por añadir dos encabezados `<h3>` diferentes con el texto:

- Schedule
- Schedule a Time Slot

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_cdeeac1a34e5b4f5785ec6f203632b7c.png)

<br/>

Ahora añadimos una tabla debajo de la primera etiqueta `<h3>`, que contiene el texto "Horario". Efectivamente, esta tabla va a contener el horario de IronSkydive para la semana. El formato de la tabla es el siguiente:

| Hora          | Lunes | Martes | Miércoles | Jueves | Viernes | Sábado |
| ------------- | ----- | ------ | --------- | ------ | ------- | ------ |
| 9:00 - 11:00  |       |        | X         |        | X       | X      |
| 12:00 - 14:00 |       |        |           |        | X       | X      |
| 15:00 - 17:00 |       |        | X         | X      | X       | X      |

Crea la tabla y añade el contenido necesario para obtener este resultado:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5c089d05a9df991db3784ba81a880835.png)

<br/>

Recuerda que, además de la etiqueta `<table>`, debes usar `<thead>`con seis etiquetas `<th>` debes definir las filas con etiquetas . Al final, debe utilizar etiquetaspara las filas de la cabecera (seis días que opera IronSkydive), y luego dentro del cuerpo de la tabla(para el contenido dentro de las filas.

### Pie de página

Por último, pero no menos importante, la sección de pie de página tiene que contener sólo una etiqueta`<section>`. Dentro de la `<section>`, tienes que añadir varias cosas (descritas en el orden correcto):

- `<h5>` con el título "Información de contacto".
- `<address>` elemento, con la información correcta_:IronSkydive 33 Rue la Fayette, 75009 París, Francia +33 (0) 619 193 088_
- `<h5>` con el título "Síguenos"
- `<ul>` con tres elementos:
  - Twitter.
  - Facebook.
  - Instagram.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_661b4572e673afb0ce5a419ae78b9ce8.png)

<br/>

### Parte 2 - Elementos en línea

En la segunda iteración de nuestro ejercicio, vas a trabajar con los elementos inline que has aprendido. Has visto que utilizamos diferentes etiquetas con diferentes objetivos. Recuerda que esta es la estructura actual de nuestro proyecto:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8f778c8cd703db596d5bb22dae089716.jpg)

<br/>

Vas a añadir diferentes elementos inline a todas las secciones que ya tenemos.

### Nav

La etiqueta`<nav>`se utiliza para envolver los enlaces de nuestra web. En este momento, tenemos sólo una lista de elementos. Vamos a cambiar esto, añadiendo _enlaces_ en cada elemento de la lista.

Hay que crear tres enlaces diferentes, que apuntarán a `#structure`, `#team` y `#schedule`, respectivamente:

:bulb: Spoiler: _los enlaces_ son etiquetas de _anclaje_ y se representan con la etiqueta `<a>`y necesitan tener el atributo `href`. :wink:

```html
<a href="#structure">Day Structure</a>
```

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_53837d5c2b9d5e3c537a87079080151e.png)

<br/>

### Encabezado

La cabecera del proyecto está incompleta. En primer lugar, es necesario añadir un logotipo a la cabecera. Además, añadir una _cita de estilo testimonial_ donde actualmente tiene texto de relleno.

**Primero, el logo.** Añade una imagen dentro del `<h1> `que cargue la siguiente imagen:

```
https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironhack-skydive-logo.png.
```

Recuerda añadir un texto alternativo descriptivo, por si la imagen no se carga. Una buena opción sería "Logotipo de IronSkydive".

Es común encontrar las comillas en _cursiva_ en diferentes lugares, así que esto es lo que vamos a hacer. Añade la cita en cursiva (usando elementos inline) dentro del elemento`<aside>`, con el texto "La mejor experiencia de nuestras vidas".En una nueva línea, esta vez usando un elemento a nivel de _bloque_ (`<p>`), añade los nombres de los autores. Los nombres serán "Ariel Quiónes & Gonzalo Manrique, fundadores de Ironhack".

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0f0563ef2d64bd9a7bdf5d401bca9c16.png)

<br/>

### Sección 1

En la primera sección, tenemos tres artículos diferentes. Cada uno tiene una etiqueta `<h3>` y otra`<p>`dentro. Vamos a añadir un enlace debajo de cada párrafo. Este enlace no necesita apuntar a ninguna parte.

<br/>

:::info

Podemos crear un enlace sin ninguna URL específica proporcionando un hash en el atributo `href`:<br/>

```html
<a href="#">Link text</a>
```

:::

<br/>

Añade tres enlaces, uno en cada sección, en este orden:

- Learn More
- Watch Video
- Register

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_016b92205b14c5a93d86d324547cf86e.png)

<br/>

### Sección 2

En esta sección, tenemos cuatro artículos diferentes que contienen información sobre cómo se estructura un día típico en IronSkydive. Vamos a añadir algunos iconos descriptivos a cada sección.

Los diferentes iconos, en el orden correcto, son

- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-training.png`
- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-get-ready.png`
- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-fly.png`
- `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironskydive-jump.png`

Recuerda añadir un texto descriptivo alternativo en el atributo `alt`. Cada una de las secciones tendrá este formato con diferentes imágenes:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3aa54eab8bec42f35381b704d5c7b06e.png)

<br/>

### Sección 3

Vamos a añadir la información del equipo en la sección. Deberás tener tres artículos diferentes sin ninguna información. Dentro de cada artículo, añadirás el nombre del miembro del equipo en el texto **en negrita** (pero esto es algo de lo que te preocuparás cuando lleguemos al estilo). Puedes utilizar la etiqueta de nivel de _bloque_,`<h4>`para envolver cada nombre. Debajo del nombre, tendrás que añadir la foto del miembro del equipo. Puedes encontrar las imágenes aquí:

- **Harold Rothstein**, `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c18b1c463b80090894237a262dfdfbad.jpg`
- **Susan Phillips**, `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a18d6123a7c8e75f7e70a4e59b941093.jpg`
- **Taylor Roberts**, `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7104a331530d1b0611da55093b7dc421.jpg`

No olvides añadir un texto alternativo en caso de que la imagen no se cargue. Estas imágenes son bastante grandes, pero lo manejaremos más adelante mediante CSS.

Para terminar esta sección, vamos a añadir un`<hr>`entre el párrafo y la información de los miembros del equipo.

### Sección 4

_No hay nada que añadir_.

### Pie de página

En primer lugar, vamos a dar formato a la dirección. Ahora mismo, toda la información está en una sola línea. Utilicemos etiquetas `<br>` para separar las diferentes secciones de la dirección.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_cf1a7806a1a921e018aa46c428d67a17.png)

<br/>

Por último, añadamos enlaces a todas las redes sociales donde los usuarios pueden seguir a IronSkydive. Puedes crear enlaces vacíos (con el hash en el atributo `href` ), o añadir enlaces a las redes sociales. En ambos casos, hay que abrir una nueva pestaña cuando los usuarios hagan clic en los enlaces.

<br/>

:::info
:bulb: Utilice el atributo [`target`](https://html.com/attributes/a-target/) del ancla para abrir un enlace en una nueva pestaña. (la palabra _target_ es cliqueable, así que siéntete libre de explorar un poco - recuerda, no tienes que memorizar nada, saber dónde encontrar las respuestas que necesitas)
:::

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_27057afe7732d2b6f26ce69eb00a63ec.png)

<br/><br/>

:heart: **¡Feliz codificación!**