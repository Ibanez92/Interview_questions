const fs = require("fs");
const dictionary = fs.readFileSync("sowpods.txt").toString("utf-8");
const dictionaryArr = dictionary.split("\n");

// input: "ABCD"
// output: ["DAD". "CAB"]

function findMatch(str) {
  const allowedLetters = str.split("");
  const result = [];
  for (let i = 0; i < dictionaryArr.length; i++) {
    const word = dictionaryArr[i].split("");
    for (let j = 0; j < word.length; j++) {
      const letters = word[j];
      if (allowedLetters.includes(letters)) {
        if (j + 1 === word.length) {
          result.push(dictionaryArr[i]);
        }
        continue;
      } else {
        break;
      }
    }
  }
  return result;
}
console.log(findMatch("ABCD"));
