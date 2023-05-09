// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
  //  iteration 1.1
  let directoresSinFiltrar = movies.map((movie) => movie.director);
  // iteration 1.2
  let directoresFiltrados = directoresSinFiltrar.filter((director, index) => {
    return directoresSinFiltrar.indexOf(director) === index;
  });
  //console.log(directoresFiltrados);
  return directoresFiltrados;
};
//getAllDirectors(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
  let stevenDramaPelis = movies.filter((pelicula) => {
    return (
      pelicula.director === "Steven Spielberg" &&
      pelicula.genre.includes("Drama")
    );
  });
  // console.table(stevenDramaPelis);
  return stevenDramaPelis;
};
//howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) => {
  if (movies.length === 0) return 0;
  // usando el reduce apuntamos al movies y le pasamos el metodo con 2 argumentos
  let puntuacion = movies.reduce((acumulador, valorActual) => {
    if (valorActual.score) {
      return acumulador + valorActual.score;
    } else {
      return acumulador;
    }
  }, 0);
  let average = (puntuacion / movies.length).toFixed(2);
  //console.log(`${Number(average)} - test`);
  return Number(average);
};
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) => {
  if (movies.length === 0) return 0;
  let dramaMovies = movies.filter((pelicula) =>
    pelicula.genre.includes("Drama")
  );
  // console.log(scoresAverage(dramaMovies));
  return scoresAverage(dramaMovies);
};
// dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  // part 1 - mappear pelis
  let peliculas = movies.map((pelicula) => pelicula);
  // part 2  - sortear con sort()
  peliculas.sort((peliA, peliB) => {
    if (peliA.year > peliB.year) return peliA.year - peliB.year;
    if (peliA.year < peliB.year) return peliA.year - peliB.year;
    else return peliA.title.localeCompare(peliB.title);
  });
  console.log(peliculas);
  return peliculas;
};
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  return movies
    .map((pelicula) => pelicula.title)
    .sort()
    .slice(0, 20);
};
console.table(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
