const parse = require("csv-parse/sync").parse;
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8");

const movies = parse(topMovieCsv, {
  columns: true,
  skip_empty_lines: true,
});
// console.log(movies);

// What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)  

// input: movies
// output: { G: int, PG: int, PG-13: int...}

function ratingsDistributor(movies) {
    const ratingsCountDict = {}

    for (const movie of movies) {
        const movieRating = movie['Rating']
        if(ratingsCountDict[movieRating] === undefined){
            ratingsCountDict[movieRating] = 0
        }
        ratingsCountDict[movieRating] += 1
    }

    return ratingsCountDict
}

console.log(ratingsDistributor(movies));