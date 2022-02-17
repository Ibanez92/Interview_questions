const parse = require("csv-parse/sync").parse;
const fs = require("fs");
const topMovieCsv = fs.readFileSync("top_movies.csv").toString("utf-8");

const records = parse(topMovieCsv, {
  columns: true,
  skip_empty_lines: true,
});
// console.log(JSON.stringify(records, null, 2));
// function properPropertyTransformer(object) {
//   const newObj = {
//     title: object["Title"],
//     distributor: object["Distributor"],
//     releaseDate: object["Release Date"],
//     usSales: object["US Sales"],
//     worldSales: object["World Sales"],
//     runtime: object["Runtime"],
//     rating: object["Rating"],
//   };

//   return newObj;
// }

// const modifiedRecordsArr = [];
// // for (let i = 0; i < records.length; i++) {
// //   modifiedRecordsArr.push(properPropertyTransformer(records[i]))

// // }

// records.forEach((obj) => {
//   modifiedRecordsArr.push(properPropertyTransformer(obj));
// });

// const modifiedRecordsArr = records.map((element) => {
//   return properPropertyTransformer(element)
// })

// console.log(modifiedRecordsArr);

// What movies on this list were distributed by DreamWorks?

// Loop through the objects in the array and find the property distributor value

// Rick modified 2/15/22 version
// function matchDistributor(distributor) {
//   const results = []
//   records.forEach( element => {
//     // if that value is set to 'Dreamworks'
//     // console.log(element);
//     if(element["Distributor"].toLowerCase() === distributor.toLowerCase()) {
//       // then push that current object title value into the empty results array
//       results.push(element.Title)
//     }
//   })
//   return results
// }

function matchDistributor(distributor) {
  return records.filter((obj) => {
    return obj["Distributor"].toLowerCase() === distributor.toLowerCase()
  }).map( (object) => {
    // if that value is set to 'Dreamworks'
    // console.log(object);
    
      // then push that current object title value into the empty results array
      return object.Title
    
  })
}

// function matchDistributor(distributor) {
//   const results = [];
//   modifiedRecordsArr.map((element) => {
//     // if that value is set to 'Dreamworks'
//     if (returnTitle(element)) {
//       // then push that current object title value into the empty results array
//       results.push(element.title);
//     }
//   });
//   return results;

//   function returnTitle(movieObj) {
//     if (movieObj.distributor.toLowerCase() === distributor.toLowerCase()) {
//       return movieObj.title;
//     }
//   }
// }

console.log(matchDistributor("Warner Bros."));

// What is the highest grossing moving from Universal Pictures, domestically?


