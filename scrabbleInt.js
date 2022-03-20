var fs = require("fs");
var scrabTextFile = fs.readFileSync("sowpods.txt").toString("utf-8");
var scrabWordsArr = scrabTextFile.split("\n");

const scores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};

function findMatch(str) {
  const validWords = [];
  const validObjWords = [];
  for (let i = 0; i < scrabWordsArr.length; i++) {
    let scoringLetters = [];
    let isMatch = true;
    const strArr = str.split("");
    for (let j = 0; j < scrabWordsArr[i].length; j++) {
      if (strArr.includes(scrabWordsArr[i][j])) {
        scoringLetters.push(scrabWordsArr[i][j]);
        strArr.splice(strArr.indexOf(scrabWordsArr[i][j]), 1);
      } else if (strArr.includes("_")) {
        strArr.splice(strArr.indexOf("_"), 1);
      } else {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      validWords.push({
        word: scrabWordsArr[i],
        scoringLetters: scoringLetters,
      });
    }
  }

  validWords.map(({ word, scoringLetters }) => {
    let joinedLetters = scoringLetters.join("").toLowerCase();
    let score = 0;
    for (let i = 0; i < joinedLetters.length; i++) {
      score += scores[joinedLetters[i]];
    }

    validObjWords.push({
      word: word,
      score: score,
    });
  });

  validObjWords.sort( (a, b) =>{
      return b.score - a.score
  })
  return validObjWords
}

console.log(findMatch("SPC_EIU"));
