const fs = require("fs");
const sowpodsTxt = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsArr = sowpodsTxt.split("\n");

// input: string of different letters
// output: an array of words made from those letters

// create function
function wordsMadeFromInput(string) {
  // create an empty array for the results
  const results = [];
  // loop through the sowpods.txt array
  for (let i = 0; i < sowpodsArr.length; i++) {
    let currentWord = sowpodsArr[i];
    // have a nested for loop to look at each letter in the word(from the sowpods.txt array)
    for (let j = 0; j < currentWord.length; j++) {
      let currentLetter = currentWord[j];
      // if the input string includes the current letter then continue to the next letter in the word, if we are at the end of the word and the words letters are included in our input string, then put that word in our results array
      if (string.includes(currentLetter)) {
        if (j + 1 === currentWord.length) {
          results.push(currentWord);
        }
        continue;
      }
    }
  }
  // return the results array
  return results;
}
console.log(wordsMadeFromInput("CAB"));