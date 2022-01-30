var fs = require("fs")
var countriesFile = fs.readFileSync("countries.txt").toString("utf-8")
var countriesArr = countriesFile.split("\n")


// A file containing all of the countries in the United Nations, one country per line:

// For loops and if conditions

// What are all of the countries that have “United” in the name?
function problem(countriesArr) {
    for (let i = 0; i < countriesArr.length; i++) {
        if(countriesArr[i].includes("United")) {
            console.log(countriesArr[i]);
        }
    }
}

// What countries both begin and end with a vowel?
function problem2(countriesArr) {
    for (let i = 0; i < countriesArr.length; i++) {
        const country = countriesArr[i].toLowerCase()
        if(
            (country.startsWith("a") || 
            country.startsWith("e") || 
            country.startsWith("i") ||
            country.startsWith("o") ||
            country.startsWith("u")) && 
            (country.endsWith("a") ||
            country.endsWith("e") ||
            country.endsWith("i") ||
            country.endsWith("o") ||
            country.endsWith("u")) 
            ) {
            console.log(country);
        }
    }
}

// What country names are > 50% vowels?

// Setting up storage to use during a for loop, including counters and arrays

// What is the shortest country name? Make sure your solution can handle ties.
// What countries use only one vowel in their name (the vowel can be used multiple times)
//     - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
// There is at least one country name that contains another country name. Find all of these cases.
// problem(countriesArr)
problem2(countriesArr)
