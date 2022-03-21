const fs = require("fs");
const scrabbleFile = fs.readFileSync("sowpods.txt").toString("utf-8");
const scrabArr = scrabbleFile.split("\n");

// input: array of scrabble words
// output: ["THIRTEENTH", "TH_TH"]
function findMatch(scrabArr) {
    const result = []
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].startsWith("TH") && scrabArr[i].endsWith("TH")){
            result.push(scrabArr[i])
        }
    }
    return result
}

// console.log(findMatch(scrabArr));

// input: "prefix"
// output: ["word with prefix", "word with prefix"]

function prefixMatch(prefix) {
    const result = []
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].startsWith(prefix))
        result.push(scrabArr[i])
    }
    return result
}

// console.log(prefixMatch("THREE"));

// input: "word", "letter"
// output: a count of how many times letter occurs in word.

function letterCounter(word, letter){
    let count = 0
    for (let i = 0; i < word.length; i++) {
        
        if(word[i].includes(letter)){
            count += 1
        }
    }
    return count
}
// console.log(letterCounter("REDRR", "R"));

// input: "ABCD"
// output: ["CAB", "DAD"]

function findMatch2(availableLetters) {
    const results = []
    const allowedLetters = availableLetters.split("")
    for (let i = 0; i < scrabArr.length; i++) {
        const currentWord = scrabArr[i]
        for (let j = 0; j < currentWord.length; j++) {
            const currentLetter = currentWord[j]
            if(allowedLetters.includes(currentLetter)){
                if(j + 1 === currentWord.length){
                    results.push(currentWord)
                }
                continue
            } else {
                break
            }
        }
    }
    return results
}
// console.log(findMatch2("ABCD"));

// words that only have 1 vowel in them

// input: scrabble words array
// output: ["ART", "BAT", "CAT"]
function oneVowelWords(scrabArr){
    const results = []
    for (let i = 0; i < scrabArr.length; i++) {
        if(scrabArr[i].includes("A") && !scrabArr[i].includes("E") && !scrabArr[i].includes("I")  && !scrabArr[i].includes("O")  && !scrabArr[i].includes("U")){
            results.push(scrabArr[i])
        }
        else if(scrabArr[i].includes("E") && !scrabArr[i].includes("A") && !scrabArr[i].includes("I")  && !scrabArr[i].includes("O")  && !scrabArr[i].includes("U")){
            results.push(scrabArr[i])
        }
        else if(scrabArr[i].includes("I") && !scrabArr[i].includes("E") && !scrabArr[i].includes("A")  && !scrabArr[i].includes("O")  && !scrabArr[i].includes("U")){
            results.push(scrabArr[i])
        }
        else if(scrabArr[i].includes("O") && !scrabArr[i].includes("E") && !scrabArr[i].includes("I")  && !scrabArr[i].includes("A")  && !scrabArr[i].includes("U")){
            results.push(scrabArr[i])
        }
        else if(scrabArr[i].includes("U") && !scrabArr[i].includes("E") && !scrabArr[i].includes("I")  && !scrabArr[i].includes("O")  && !scrabArr[i].includes("A")){
            results.push(scrabArr[i])
        }
    }
    
    return results
}
console.log(oneVowelWords(scrabArr));