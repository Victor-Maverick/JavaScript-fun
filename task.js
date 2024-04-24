function sortScores(testScores){
    var outputArray = testScores.filter(number => number >= 70 && number<101)
    return outputArray
}

function increaseScores(array){
    var outputArray = array.map(number => number + 5)
    return outputArray
}

module.exports = {sortScores, increaseScores}