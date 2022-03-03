const fs = require("fs");
const scrabbleFile = fs.readFileSync("sowpods.txt").toString("utf-8");
const scrabbleDictionary = scrabbleFile.split("\n");
// output: { 2 letter words: %, 3 letter words: %, 4 letter words: %,... }
// input : scrabbleDictionary

// create the function
function findWordsPercentage(scrabbleDictionary) {
    // empty dictionary
    const wordsPercentageDict = {}
    
    for (const word of scrabbleDictionary) {
        let key = word.length
        if(word.length === 0){
            continue
        }
        if(wordsPercentageDict[key] === undefined){
            wordsPercentageDict[key] = 0
        }
        wordsPercentageDict[key] += 1
    }
    for (const key in wordsPercentageDict) {
        wordsPercentageDict[key] = wordsPercentageDict[key]/scrabbleDictionary.length
            
        
    }


    return wordsPercentageDict
}
console.log(findWordsPercentage(scrabbleDictionary));