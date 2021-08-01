const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 

//Receives 1 argument, an Array of JavaScript Objects
//Each object has two properties: year and result
//Use find() to test each Object to see if the result is "W" — a win!
//superbowlWin() should return the year when the win occurred (if it occurred at all!). 
//If no win is found, it should return, sadly, undefined
//ex: [1,3,5,6,8].find(function(e) { return e % 2 === 0 }) 

function superbowlWin(arr) {
    let winner = arr.find(win => {
        return win.result === "W"
    })
    if (winner === undefined) {
        return winner
    } else {
        return winner.year
    }
}

