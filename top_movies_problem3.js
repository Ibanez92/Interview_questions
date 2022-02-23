const parse = require("csv-parse/sync").parse;
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8");

const records = parse(topMovieCsv, {
  columns: true,
  skip_empty_lines: true,
});
// console.log(records);

// What distributor has the most films on this list?
function distributorMostFilms(movies) {
  const distributorCountDict = {};

  for (const movie of movies) {
    const movieDistributor = movie["Distributor"];

    if (distributorCountDict[movieDistributor] === undefined) {
      distributorCountDict[movieDistributor] = 0;
    }
    distributorCountDict[movieDistributor] += 1;
  }

  let mostFilmsDist = null;
  let distributorValue = null;
  for (const key in distributorCountDict) {
    if (
      distributorValue === null ||
      distributorCountDict[key] > distributorValue
    ) {
      distributorValue = distributorCountDict[key];
      mostFilmsDist = key;
    }
  }
  return distributorValue + " " + mostFilmsDist;
  // loop through the distributor dictionary
}

function getHighestDistributorCount() {}

console.log(distributorMostFilms(records));

// input: records
// output: distributor
