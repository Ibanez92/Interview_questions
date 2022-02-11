const fs = require("fs");
const countriesFile = fs.readFileSync("countries.txt").toString("utf-8");
const countriesArr = countriesFile.split("\n");

// What are all of the countries that have “United” in the name?
function problem(countriesArr) {
  for (let i = 0; i < countriesArr.length; i++) {
    if (countriesArr[i].includes("United")) {
      console.log(countriesArr[i]);
    }
  }
}

// What countries both begin and end with a vowel?
function problem2(countriesArr) {
  for (let i = 0; i < countriesArr.length; i++) {
    let country = countriesArr[i].toLowerCase();
    if (
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
function problem3(countriesArr) {
  // "Albania" = 7 letters, 4 vowels
  // 4 / 7 = 0.57142857
  // if 0.57142857 > 0.50 = word is > 50% vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // var country = "Albania";
  for (let i = 0; i < countriesArr.length; i++) {
    // let vowelCount = 0;
    const country = countriesArr[i];
    const lettersInCountry = country.split("");
    // const vowelsInCountry = lettersInCountry.filter((letter) =>
    //   vowels.includes(letter)
    // );
    const vowelsInCountry = [];
    for (const letter of lettersInCountry) {
      if (vowels.includes(letter)) {
        vowelsInCountry.push(letter);
      }
    }

    const vowelCount = vowelsInCountry.length;
    if (vowelCount / country.length > 0.5) {
      console.log(country);
    }
    // console.log(vowelCount);
    // console.log(country.split(""));
  }
}

// What is the shortest country name? Make sure your solution can handle ties.
function problem4(countriesArr) {
  let shortestCountryArr = [countriesArr[0]];
  for (let i = 0; i < countriesArr.length; i++) {
    if (countriesArr[i].length < shortestCountryArr[0].length) {
      shortestCountryArr = [countriesArr[i]];
    } else if (shortestCountryArr[0].length === countriesArr[i].length) {
      shortestCountryArr.push(countriesArr[i]);
    }
  }
  console.log(shortestCountryArr);
  // for (const country of countriesArr) {
  //   if (country !== "") {
  //     if (country.length < resultArr[0].length) {
  //       resultArr = [country];
  //     } else if (country.length === resultArr[0].length) {
  //       resultArr.push(country)
  //     }
  //   }
  // }
  // console.log(resultArr);
}

// What countries use only one vowel in their name (the vowel can be used multiple times)
//     - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
function problem5(countriesArr) {
  const results = [];

  for (const country of countriesArr) {
    if (hasOnlyOneVowel(country)) {
      results.push(country);
    }
  }

  console.log(results);
}

function hasOnlyOneVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let firstVowel = "";
  for (const character of str.toLowerCase()) {
    if (vowels.includes(character)) {
      if (firstVowel === "") {
        firstVowel = character;
      } else {
        if (firstVowel !== character) {
          return false;
        }
      }
    }
  }
  // for (let i = 0; i < str.length; i++) {
  //   const character = str[i].toLowerCase();
  //   if (vowels.includes(character)) {
  //     if (firstVowel === "") {
  //       firstVowel = character;
  //     } else {
  //       if (firstVowel !== character) {
  //         return false;
  //       }
  //     }
  //   }
  // }
  return true;
}

// There is at least one country name that contains another country name. Find all of these cases.
function problem6(countriesArr) {
  for (let i = 0; i < countriesArr.length; i++) {
    var currentWord = countriesArr[i];
    for (let j = 0; j < countriesArr.length; j++) {
      if (i !== j && countriesArr[j].includes(currentWord)) {
        console.log(currentWord);
      }
    }
  }
}
// problem(countriesArr)
// problem2(countriesArr)
problem3(countriesArr);
// problem4(countriesArr);
// problem5(countriesArr);
// problem6(countriesArr)
