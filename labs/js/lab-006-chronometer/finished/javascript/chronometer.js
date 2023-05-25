class Chronometer {
  constructor() {
    // Definimos dos tipos de datos que usaremos dentro de nuestro cronometro
    // un tipo de de dato de numero
    // Usamos el syntax this."nombreDeDato" para habilitar el uso de ese dato fuera del alcanze de donde vive. En este caso en particular este tipo de dato vive dentro del constructor() que nos habilita crear un objeto :)
    // Que quede claro que si queremos usar elementos de un objeto fuera del alcanze del mismo la palabra esencial es "this."
    this.currentTime = 0;
    // Un tipo de dato nulo!
    this.intervalId = null;
  }

  start() {
    // primero queremos apuntar a propiedad de intervalId y despues depender de setINterval para que cada 1 segundo le agregemos el valor de 1 a la propiedad de currentTime
    this.intervalId = setInterval(() => {
      // Apuntamos a la propiedad de currentTime y usando el operado de asignacion+= le asignamos el valor de 1 cada 1 segundo.
      this.currentTime++;
      // Imprimemios en consola para tener visibilidad
      //console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    // recibimos el valor del numero mediante la propiedad currentTime, aprovechamos y dividimos ese valor por 60 y usamos el metodo math.floor() para redondear :)
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
      // extra layer of seguridad
    } else {
      return '' + value;
      // extra layer of seguridad
    }

    // Una linea
    //return ('0' + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // quiero guardad por ejemplo los minutos que recibimos de la funcion getMinutes y mezclarla con la funcion compute computeTwoDigitNumber!

    let minutos = this.computeTwoDigitNumber(this.getMinutes());
    let segundos = this.computeTwoDigitNumber(this.getSeconds());
    // Return  "mm:ss_"

    // RETURN CON DEPENDENCIA DE VARIABLES DE MINUTOS + SEGUNDOS
    return `${minutos}:${segundos}`;

    // Return mas implicito sin dependencia de variables
    // return `${this.computeTwoDigitNumber(
    //   this.getMinutes
    // )}${this.computeTwoDigitNumber(this.getSeconds)}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
