const fs = require("fs");
const sowpodsTxt = fs.readFileSync("sowpods.txt").toString("utf-8");
const sowpodsArr = sowpodsTxt.split("\n");

// Write a function that takes a string, and returns an array of all of the words that can be made from those letters in the string

// input: "ABCD"
// output: [DAD, CAB]

// create function
function wordsMadeFromLetters(string) {
  let stringArr = string.split("");
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
// console.log(wordsMadeFromLetters("ABC"));

// Write a function that takes a string, and returns an array of all of the words that can be made from those letters in the string

// input: "ABCD"
// output: [DAD, CAB]

function findMatch2(string) {
  let stringArr = string.split("");
  // create an empty array for the results
  const results = [];
  for (let i = 0; i < sowpodsArr.length; i++) {
    let currentWordArr = sowpodsArr[i].split("")
    for (let j = 0; j < currentWordArr.length; j++) {
      let currentLetter = currentWordArr[j]
      if(stringArr.includes(currentLetter)){
        // if it is included, we want to check if the next letter in the current word is a match in the input string array
        if(j + 1 === currentWordArr.length){
          results.push(sowpodsArr[i])
        }
        continue
      } else {
        // if it isnt, we want to get out of the current iteration and go to the next one(word)
        break
      }
      
    }
  }

  return results;
}

console.log(findMatch2("ABCD"));
