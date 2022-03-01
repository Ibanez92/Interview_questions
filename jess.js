const fs = require("fs");
const sowpodsTxt = fs.readFileSync("sowpods.txt").toString("utf-8");
const dict = sowpodsTxt.split("\n");

// Write a function that takes a string, and returns an array of all of the words that can be made from those letters in the string

// input: "ABCD"
// output: [DAD, CAB]

// create function
function wordsMadeFromLetters(string) {
  let allowedLetters = string.split("");
  // create an empty array for the matchedWords
  const matchedWords = [];
  // loop through the sowpods.txt array
  for (let i = 0; i < dict.length; i++) {
    let currentWord = dict[i];

    // have a nested for loop to look at each letter in the word(from the sowpods.txt array)
    for (let j = 0; j < currentWord.length; j++) {
      let currentLetter = currentWord[j];

      // if the input string includes the current letter then continue to the next letter in the word, if we are at the end of the word and the words letters are included in our input string, then put that word in our matchedWords array
      if (string.includes(currentLetter)) {
        if (j + 1 === currentWord.length) {
          matchedWords.push(currentWord);
        }
        continue;
      }
    }
  }
  // return the matchedWords array
  return matchedWords;
}
// console.log(wordsMadeFromLetters("ABC"));

// Write a function that takes a string, and returns an array of all of the words that can be made from those letters in the string

// input: "ABCD"
// output: [DAD, CAB]

function findMatch2(string) {
  const allowedLetters = string.split("");
  const matchedWords = [];
  for (let i = 0; i < dict.length; i++) {
    const currentWordArr = dict[i].split("");
    for (let j = 0; j < currentWordArr.length; j++) {
      const currentLetter = currentWordArr[j];
      if (allowedLetters.includes(currentLetter)) {
        // if it is included, we want to check if the next letter in the current word is a match in the input string array
        if (j + 1 === currentWordArr.length) {
          matchedWords.push(dict[i]);
        }
        continue;
      } else {
        // if it isnt, we want to get out of the current iteration and go to the next one(word)
        break;
      }
    }
  }

  return matchedWords;
}

console.log(findMatch2("ABCD"));

function findMatch3(string) {
  const allowedLetters = string.split("");
  const matchedWords = [];
  for (const word of dict) {
    const letters = word.split("");
    let matched = true;
    for (const letter of letters) {
      if (!allowedLetters.includes(letter)) {
        matched = false;
        break;
      }
    }
    if (matched) {
      matchedWords.push(word);
    }
  }
  return matchedWords;
}

// console.log(findMatch3("ABCD"));

function findMatch4(string) {
  const allowedLetters = string.split("");
  const matchedWords = [];
  for (const word of dict) {
    const letters = word.split("");
    let index = 0;
    for (const letter of letters) {
      if (allowedLetters.includes(letter)) {
        // if it is included, we want to check if the next letter in the current word is a match in the input string array
        if (index + 1 === letters.length) {
          matchedWords.push(word);
        }
        index = index + 1;
      } else {
        // if it isnt, we want to get out of the current iteration and go to the next one(word)
        break;
      }
    }
  }
  return matchedWords;
}

// console.log(findMatch4("ABCD"));

function findMatch5(string) {
  const allowedLetters = string.split("");

  const matchedWords = dict.filter((word) => {
    let matched = true;
    const letters = word.split("");
    for (const letter of letters) {
      if (!allowedLetters.includes(letter)) {
        matched = false;
        break;
      }
    }
    return matched;
  });
  return matchedWords;
}

// console.log(findMatch5("ABCD"));
