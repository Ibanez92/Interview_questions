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

  for (let i = 0; i < scrabArr.length; i++) {
    let current_vowel_index = 0;
    for (let j = 0; j < scrabArr[i].length; j++) {
        if(scrabArr[i][j] === vowels[current_vowel_index]) {
            current_vowel_index++
        }
        if(current_vowel_index === vowels.length) {
           console.log("This is a match! " + scrabArr[i])
        }
    }
  }
}
// Setting up storage to use during a for loop, including counters and arrays

// How many words contain the substring "TYPE”?
function problem11(scrabArr) {
    let count = 0
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].includes("TYPE")) {
            count++ 
        }
    }
    console.log(count);
}
// Create and print an array containing all of the words that end in "GHTLY"
function problem12(scrabArr) {
    let results = []
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].endsWith("GHTLY")) {
            results.push(scrabArr[i])
        }
    }
    return results
}
// What is the shortest word that contains all 5 vowels?
// What is the longest word that contains no vowels?
// Which of the letters Q, X, and Z is the least common?
// What is the longest palindrome?
// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

// problem1(scrabArr);
// problem2(scrabArr)
// problem3(scrabArr)
// problem4(scrabArr)
// problem5(scrabArr)
// problem6(scrabArr)
// problem7(scrabArr)
// problem8(scrabArr)
// problem9(scrabArr)
// problem10(scrabArr)
// problem11(scrabArr)
console.log(problem12(scrabArr))


