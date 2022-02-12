const parse = require('csv-parse/sync').parse
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8")

const records = parse(topMovieCsv, {
    columns: true,
    skip_empty_lines: true
  });

function properPropertyTransformer(object) {
   const newObj = {
    title: object['Title'],
    distributor: object["Distributor"],
    releaseDate: object['Release Date'],
    usSales: object['US Sales'],
    worldSales: object["World Sales"],
    runtime: object['Runtime'],
    rating: object["Rating"],
    }

    return newObj
}

console.log(records);