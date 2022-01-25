const fs = require("fs")
const nbaFile = fs.readFileSync("nba_finals.csv").toString("utf-8")
const nbaArr = nbaFile.split("\n")
// console.log(nbaArr);

var yearWonTeamWon = {}
var teamWonYearWon = {}

for (let i = 0; i < nbaArr.length; i++) {
    var yearlyData = nbaArr[i].split(",")    
    var yearWon = yearlyData[0]
    var teamWon = yearlyData[1]
    var teamLost = yearlyData[2]
    var seriesScore = yearlyData[3]
    var mvp = yearlyData[4].trim()

    yearWonTeamWon[yearWon] = teamWon

    if(teamWonYearWon[teamWon] === undefined) {
        teamWonYearWon[teamWon] = []
    }
    teamWonYearWon[teamWon].push(yearWon)
}

// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
function problem1(year) {
    let winner = yearWonTeamWon[year]
    if(typeof winner !== undefined) {
        return winner
    } else { 
        return "No team found for team entered"
    }
}

// Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
function problem2(team) {
    return teamWonYearWon[team]
}

// Write a function that takes as an argument a team name and returns the first year the team won the NBA finals.
function problem3(teamName) {
    // console.log(teamWonYearWon[teamName]);
    return Math.min(...teamWonYearWon[teamName])
}

// Which teams have made it to the NBA finals but have never won?


// Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>

console.log(problem1(1955))
console.log(problem2("Boston Celtics"))
console.log(problem3("Los Angeles Lakers"));
