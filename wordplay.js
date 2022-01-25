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
        if(scrabArr[i].includes("X") && scrabArr[i].includes("Y") && scrabArr[i].includes("Z")) {
            console.log(scrabArr[i]);
        }
    }
}
// What are all of the words containing a Q but not a U?
function problem3(scrabArr) {
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].includes("Q") && !scrabArr[i].includes("U")) {
            console.log(scrabArr[i]);
        }
    }
}
// What are all of the words that contain the word CAT and are exactly 5 letters long?
function problem4() {
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].includes("CAT") && scrabArr[i].length === 5) {
            console.log(scrabArr[i]);
        }
    }
}
// What are all of the words that have no E or A and are at least 15 letters long?
function problem5(scrabArr) {
    for (let i = 0; i < scrabArr.length; i++) {
        if((!scrabArr[i].includes("E") || !scrabArr[i].includes("A")) && (scrabArr[i].length <= 15)) {
            console.log(scrabArr[i]);
        }
    }
}
// What are all of the words that have a B and an X and are less than 5 letters long?
function problem6(scrabArr) {
    for (let i = 0; i < scrabArr.length; i++) {
        if((scrabArr[i].includes("B") && scrabArr[i].includes("X")) && (scrabArr[i].length <= 5)){
            console.log(scrabArr[i]);
        }
    }
}
// What are all of the words that start and end with a Y?
// What are all of the words with no vowel and not even a Y?
// What are all of the words that have all 5 vowels, in any order?
// What are all of the words that have all 5 vowels, in alphabetical order?

// Setting up storage to use during a for loop, including counters and arrays

// How many words contain the substring "TYPE”?
// Create and print an array containing all of the words that end in "GHTLY"
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