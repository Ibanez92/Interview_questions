const fs = require("fs");
const scrabbleFile = fs.readFileSync("sowpods.txt").toString("utf-8");
const scrabArr = scrabbleFile.split("\n");

// What are all of the words containing UU?
function problem1(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (scrabArr[i].includes("UU")) {
      console.log(scrabArr[i]);
    }
  }
}

// What are all of the words containing an X and a Y and a Z?
function problem2(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      scrabArr[i].includes("X") &&
      scrabArr[i].includes("Y") &&
      scrabArr[i].includes("Z")
    ) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words containing a Q but not a U?
function problem3(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (scrabArr[i].includes("Q") && !scrabArr[i].includes("U")) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words that contain the word CAT and are exactly 5 letters long?
function problem4() {
  for (let i = 0; i < scrabArr.length; i++) {
    if (scrabArr[i].includes("CAT") && scrabArr[i].length === 5) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words that have no E or A and are at least 15 letters long?
function problem5(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      (!scrabArr[i].includes("E") || !scrabArr[i].includes("A")) &&
      scrabArr[i].length <= 15
    ) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words that have a B and an X and are less than 5 letters long?
function problem6(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      scrabArr[i].includes("B") &&
      scrabArr[i].includes("X") &&
      scrabArr[i].length <= 5
    ) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words that start and end with a Y?
function problem7(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (scrabArr[i].startsWith("Y") && scrabArr[i].endsWith("Y")) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words with no vowel and not even a Y?
function problem8(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      !scrabArr[i].includes("A") &&
      !scrabArr[i].includes("E") &&
      !scrabArr[i].includes("I") &&
      !scrabArr[i].includes("O") &&
      !scrabArr[i].includes("U") &&
      !scrabArr[i].includes("Y")
    ) {
      console.log(scrabArr[i]);
    }
  }
}
// What are all of the words that have all 5 vowels, in any order?
function problem9(scrabArr) {
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      scrabArr[i].includes("A") &&
      scrabArr[i].includes("E") &&
      scrabArr[i].includes("I") &&
      scrabArr[i].includes("O") &&
      scrabArr[i].includes("U")
    ) {
      console.log(scrabArr[i]);
    }
  }
}



// What are all of the words that have all 5 vowels, in alphabetical order?
function problem10(scrabArr) {
  let vowels = ["A", "E", "I", "O", "U"];

  const letterVowel = function (letter) {
    let notVowel = null;
    if (
      letter.includes("A") ||
      letter.includes("E") ||
      letter.includes("I") ||
      letter.includes("O") ||
      letter.includes("U")
    ) {
      return letter;
    }
    return notVowel;
  };
// abstemious


  for (let i = 0; i < scrabArr.length; i++) {
    let current_vowel_index = 0;
    for (let j = 0; j < scrabArr[i].length; j++) {
      if (scrabArr[i][j] === vowels[current_vowel_index]) {
        current_vowel_index++;
      } else {
        // if we hit another vowel other than the one thats next in our vowels array, we need to break out of that loop
        if (letterVowel(scrabArr[i][j]) !== vowels[current_vowel_index] && letterVowel(scrabArr[i][j]) !== null) {
          break
        }
      }
      if (vowels.length === current_vowel_index) {
        console.log(
          "The word " + scrabArr[i] + " has all 5 vowels in alphabetical order"
        );
        break
      }
    }
  }
}






// How many words contain the substring "TYPE”?
function problem11(scrabArr) {
  let count = 0;
  for (let i = 0; i < scrabArr.length; i++) {
    if (scrabArr[i].includes("TYPE")) {
      count++;
    }
  }
  console.log(count);
}
// Create and print an array containing all of the words that end in "GHTLY"
function problem12(scrabArr) {
  let results = [];
  for (let i = 0; i < scrabArr.length; i++) {
    if (scrabArr[i].endsWith("GHTLY")) {
      results.push(scrabArr[i]);
    }
  }
  return results;
}
// What is the shortest word that contains all 5 vowels?
function problem13(scrabArr) {
  let shortestWord = null;
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      scrabArr[i].includes("A") &&
      scrabArr[i].includes("E") &&
      scrabArr[i].includes("I") &&
      scrabArr[i].includes("O") &&
      scrabArr[i].includes("U")
    ) {
      if (shortestWord === null || shortestWord.length > scrabArr[i].length) {
        shortestWord = scrabArr[i];
      }
    }
  }
  console.log(shortestWord);
}
// What is the longest word that contains no vowels?
function problem14() {
  let longestWord = null;
  for (let i = 0; i < scrabArr.length; i++) {
    if (
      !scrabArr[i].includes("A") &&
      !scrabArr[i].includes("E") &&
      !scrabArr[i].includes("I") &&
      !scrabArr[i].includes("O") &&
      !scrabArr[i].includes("U")
    ) {
      if (longestWord === null || longestWord.length > scrabArr[i].length) {
        longestWord = scrabArr[i];
      }
    }
  }
  console.log(longestWord);
}
// Which of the letters Q, X, and Z is the least common?
function problem15(scrabArr) {
  // Set up a dictionary with q, x, and z as the keys, and set the count as the value
  let letterDictionary = {
    Q: 0,
    X: 0,
    Z: 0,
  };

  // create function to repeat code for q, x, z counters
  let letterCount = function (letter, word) {
    // if the letter is included in the word, run the following statement
    if (word.includes(letter)) {
      // using the addition assisngment add the number count to the letter we're looking at in the letter dictionary by taking the word, splitting it into an array, and filtering the element
      letterDictionary[letter] += word.split("").filter((element) => {
        // return the element that equals the letter
        return element === letter;
        // add the .length to the end of the filter method to count how letters we matched
      }).length;
    }
  };

  // Loop through the scrabble words
  for (let i = 0; i < scrabArr.length; i++) {
    letterCount("Q", scrabArr[i]);
    letterCount("X", scrabArr[i]);
    letterCount("Z", scrabArr[i]);
  }
  // set result variables for the lowest letter count and for the lowest letter key
  let lowestLetterCount = null;
  let lowestLetterKey = null;
  // now we need to loop through our dictionary and find the property with the lowest value
  for (const key in letterDictionary) {
    // if the lowest letter count variable is set to to null or if the letter dictionary key is less than the lowest letter count varaible run the statement
    if (
      lowestLetterCount === null ||
      letterDictionary[key] < lowestLetterCount
    ) {
      // set the lowest letter count to the letter dictionary value
      lowestLetterCount = letterDictionary[key];
      lowestLetterKey = key;
    }
  }
  console.log(letterDictionary);
  console.log(lowestLetterKey + ": " + lowestLetterCount);
}
// What is the longest palindrome?
function problem16(scrabArr) {
  // set result variable for the longest palindrome to null so we can insert the result later when the conditions are met
  let longestPalindrome = null;
  // loop through the scrabble words array
  for (const word of scrabArr) {
    // if the scrabble word we're looking at is equal to the word after we split into an array, reverse the elements and join the elements into a string
    if (word === word.split("").reverse().join("")) {
      // if the longest plaindrome variable is equal to null or if the length of the longest palindrome is less than the scrabble word length we're currently looking at
      if (
        longestPalindrome === null ||
        longestPalindrome.length < word.length
      ) {
        // set the longest palindrome variable to the current scrabble word
        longestPalindrome = word;
      }
    }
  }
  console.log(longestPalindrome);
}

// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
function problem17(scrabArr) {
  // find the letters that dont appear consecutively in any word

  // list of letters to cross off when they appear consecutively
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // use the for of loop to go through every word
  for (const word of scrabArr) {
    let previousLetter = null;
    // check if any letter appears consecutively
    for (const letter of word) {
      if (previousLetter === letter && letters.includes(letter)) {
        // remove letter from list
        letters.splice(letters.indexOf(letter), 1);

        // console.log(previousLetter, letter);
      }
      previousLetter = letter;
    }
  }
  // print the list
  console.log(letters);
}

// problem1(scrabArr);
// problem2(scrabArr)
// problem3(scrabArr)
// problem4(scrabArr)
// problem5(scrabArr)
// problem6(scrabArr)
// problem7(scrabArr)
// problem8(scrabArr)
// problem9(scrabArr)
problem10(["ABSTEMIOUS"]);
// problem11(scrabArr)
// console.log(problem12(scrabArr))
// problem13(scrabArr)
// problem14(scrabArr)
// problem15(scrabArr);
// problem16(scrabArr);
// problem17(scrabArr);