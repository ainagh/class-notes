// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//Este movies hace referencia al parámetro de la array function
function getAllDirectors(movies) {
    //el movies de la array functions hace referencia al parámetro de la array function
    const directorsRaw = movies.map(movie => movie.director);

    let directorsFiltered = directorsRaw.filter((director, index) => directorsRaw.indexOf(director) === index);
    
    console.log(directorsFiltered)
    return directorsFiltered;
}
/* getAllDirectors (movies) */

 // Jarko approach
    // let directosFilteredAlt = [... new Set(directorsRaw)];
    // console.log(directosFilteredAlt);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/* One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director. */

/* function howManyMovies(moviesArray)  */
const howManyMovies = (movies) => {
   const filteredMovies = movies.filter((movie) => {
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
   });
   console.log('FILTERED MOVIES: ', filteredMovies)
   return filteredMovies.length
 
}
console.log(howManyMovies (movies));

//console.log(filteredMovies);

 



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/* Iteration 3: All scores average
These are the best movies based on their scores, so supposedly all of them have a remarkable score. In this iteration, we want to know the average score of all of them and display it on the console. Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

The score must be returned rounded to 2 decimals!

💡 Maybe you want to "reduce" the data to a single value. 😉 */

/* function scoresAverage(moviesArray) {
    const totalScore = movies.map ((puntuation) => puntuation.score)
    console.log(totalScore)

    let sum = totalScore.reduce((a, b) => a+b);
    console.log(sum);


    const aum = totalScore.reduce((a, b) => a + b);
    console.log(sum);

    const avg = sum / totalScore.length

} */

/* function scoresAverage(moviesArray) {
    const totalScore = movies.map((puntuation) => puntuation.score)
    console.log(totalScore);

    let sum = totalScore.reduce((a, b) => a + b);
    console.log(sum);

    let avg = parseFloat(sum / totalScore.length);
    console.log(avg);

    console.log(avg.toFixed(2));
}
console.log(scoresAverage); */


//com ho hem corregit a classe
const scoresAverage = (movies) => {
    //part 1: verificació inicial de l'array
    if (movies.length === 0) return 0;
    //part 2: fent servir reduce() metode amb dos parametres i un valor inicial
    const totalScore = movies.reduce((accumulator, currentValue) => {
        if (currentValue.score) {
            return accumulator + currentValue.score;
        } else {
            return accumulator;
        }
    }, 0)

   return (totalScore / movies.length).toFixed(2); 
};
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

/* Utilizar el método filter para crear un nuevo array (dramaMoviesArray) que solo incluya películas del género “drama”
Pasar el dramaMoviesArray a la función scoresAverage para encontrar la puntuación promedio de las películas de drama */

//function dramaMoviesScore(moviesArray) 

//corregit a classe així:
const dramaMoviesScore = (movies) => {
    if (movies.length === 0) return 0;
    //part 1
   const dramaMoviesUsingIncludes = movies.filter((movie) => movie.genre.includes ("Drama")
   );
   const averageDramaScores = scoresAverage (dramaMoviesUsingIncludes);
   return averageDramaScores;
}

console.log(dramaMoviesScore(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/* function orderByYear(moviesArray) {} */

const orderByYear = (movies) => {
    //part 1
    //queremos crear un shallow copy del array original - usemos el método map () === "crear un shallow copy"
    const movieArrayCopy = movies.map((movie) => {
        movie;
    });
    // part 2
    //usamos el sort() method para sortear
    movieArrayCopy.sort((movieA, movieB) => {
        if (movieA.year > movieB.year) return movieA.year - movieB.year;
        if (movieA.year < movieB.year) return movieA.year - movieB.year;
        else return movieA.title.localeCompare(movieB.title);
    });
    //part 3
    //return
    return movieArrayCopy;
};

console.table(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//corregit a classe així:
/* function orderAlphabetically(moviesArray) */ 
 const orderAlphabetically = (movies) => {
    return movies.map((movie) => movie.title).sort().slice(0, 20);
 };

 console.table(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
