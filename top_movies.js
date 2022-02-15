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

const modifiedRecordsArr = []
// for (let i = 0; i < records.length; i++) {
//   modifiedRecordsArr.push(properPropertyTransformer(records[i]))
  
// }

records.forEach(element => {
  modifiedRecordsArr.push(properPropertyTransformer(element))
});

// const modifiedRecordsArr = records.map((element) => {
//   return properPropertyTransformer(element)
// })

// console.log(modifiedRecordsArr);

// What movies on this list were distributed by DreamWorks?

// Loop through the objects in the array and find the property distributor value



function matchDistributor(distributor) {
  const results = []
  modifiedRecordsArr.forEach( element => {
    // if that value is set to 'Dreamworks'
    if(element.distributor.toLowerCase() === distributor.toLowerCase()) {
      // then push that current object title value into the empty results array
      results.push(element.title)
    }
  })
  return results
}

console.log(matchDistributor('Warner Bros.'));