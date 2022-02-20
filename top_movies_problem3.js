const parse = require("csv-parse/sync").parse;
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8");

const records = parse(topMovieCsv, {
  columns: true,
  skip_empty_lines: true,
});

// What distributor has the most films on this list?
function distributorMostFilms(movies) {
    let distributorCounterDictionary = {
      'DreamWorks': 0,
      'Lionsgate': 0,
      'New Line Cinema': 0,
      'Paramount Pictures': 0,
      'Summit Entertainment': 0,
      'Sony Pictures Entertainment (SPE)': 0,
      'Twentieth Century Fox': 0,
      'Warner Bros.': 0,
      'Walt Disney Studios Motion Pictures': 0,
    }

    for (let i = 0; i < movies.length; i++) {
      let movieDistributor = movies[i]['Distributor']  
      if(distributorCounterDictionary[movieDistributor] === movieDistributor) {
        distributorCounterDictionary[movieDistributor] += 1
      }
    }
    
    return distributorCounterDictionary
}

console.log(distributorMostFilms(records));

// input: records
// output: distributor