const parse = require("csv-parse/sync").parse;
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8");

const movies = parse(topMovieCsv, {
  columns: true,
  skip_empty_lines: true,
});
// console.log(movies);

// What is the earliest year on this list, and what were the films from that year?

// input: movies
// output: {
// films: ["film", "film", "film"],
// year:
// }

function lowYearAndFilms(movies) {
  // create an empty dictionary
  let lowYearAndFilmsDict = {
      films: [],
      year: movies[0]['Release Date']
  }
  // assign an empty value for the variable release date(ex. let release date = null)
  // loop through the array of movies
  for (let i = 0; i < movies.length; i++) {
    // assign the first value of the movies release date property to the empty variable release date
    
    // if its not the same index in the array and the release date value is less than the current value
    if(i !== 0 && movies[i]['Release Date'] < lowYearAndFilmsDict.year){
        // reassign that current release date value to the release date variable
        lowYearAndFilmsDict.year = movies[i]['Release Date']
        lowYearAndFilmsDict.films = []

    }
    if(movies[i]['Release Date'] === lowYearAndFilmsDict.year){
        lowYearAndFilmsDict.films.push(movies[i]['Title'])
    }

    
  }
  return lowYearAndFilmsDict

}
console.log(lowYearAndFilms(movies));