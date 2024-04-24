function sortScores(testScores){
    var outputArray = testScores.filter(number => number >= 70 && number<101)
  
}

function increaseScores(examGrades){
    return examGrades.map(number => number + 5)
    
}

function squareScores(integerList){
    return integerList.map(number => number * number)    
}


module.exports = {sortScores, increaseScores, squareScores}