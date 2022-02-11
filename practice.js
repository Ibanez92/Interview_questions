const fs = require("fs");

function loadLinesFromFile(fileName) {
  return fs.readFileSync(fileName).toString("utf-8").split("\n");
}

// What are all of the names that were top 40 baby names in both 1880 and 2020?
function nameMatch(arr1, arr2) {
  const results = [];
  // for loop over the 1880 baby names array and have a nested for loop going over the 2020 baby names array
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== "") {
      continue;
    }
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        results.push(arr1[i]);
      }
    }
  }
  return results;
}

const babynames_1880_arr = loadLinesFromFile("baby_names_1880_short.txt");
const babynames_2020_arr = loadLinesFromFile("baby_names_2020_short.txt");

console.log(nameMatch(babynames_1880_arr, babynames_2020_arr));
