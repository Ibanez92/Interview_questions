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
  const lowYearAndFilmsDict = {
      films: [],
      year: movies[0]['Release Date']
  }
  // loop through the array of movies
  for (let i = 0; i < movies.length; i++) {
    
    // if its not the same index in the array and the release date value is less than the current value
    if(i !== 0 && movies[i]['Release Date'] < lowYearAndFilmsDict.year){
        // assign the year key to the new lowest release date value
        lowYearAndFilmsDict.year = movies[i]['Release Date']
        // assign the films key to the empty array value when new lowest release date year found
        lowYearAndFilmsDict.films = []

    }
    // if the release date value is equal to the current lowest year in the dictionary
    if(movies[i]['Release Date'] === lowYearAndFilmsDict.year){
      // push the title of the film to the films property value array
        lowYearAndFilmsDict.films.push(movies[i]['Title'])
    }

    
  }
  return lowYearAndFilmsDict

}
console.log(lowYearAndFilms(movies));