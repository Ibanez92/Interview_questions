const parse = require("csv-parse/sync").parse;
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8");

const records = parse(topMovieCsv, {
  columns: true,
  skip_empty_lines: true,
});

// console.log(records);

// What is the highest grossing movie from Universal Pictures, domestically?
function highestGrossingMovie(movies, movieDistributor) {
    // loop through the array of objects
    let matchingDistributor = movies.filter((movie) => {
        return movie.Distributor === movieDistributor
    })

    let result = matchingDistributor[0]
    for (let i = 0; i < matchingDistributor.length; i++) {
        if(matchingDistributor[i]['US Sales'] > result['US Sales']) {
            result = matchingDistributor[i]['Title']
        }
    }
    return result;
    // filter out the objects that dont have distributor set to universal pictures

    // 
}

console.log(highestGrossingMovie(records, 'Universal Pictures'));





// input: the array of movies
// input: movie distributor
// output: movie title