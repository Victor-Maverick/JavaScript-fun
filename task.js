function sortScores(testScores){
    return testScores.filter(number => number >= 70 && number<101)
  
}

function increaseScores(examGrades){
    return examGrades.map(number => number + 5)
    
}

function squareScores(integerList){
    return integerList.map(number => number * number)    
}

function distributeBooks(listOfMembers){
    for (const value of listOfMembers){
        value.book += value.name+"'s book"
    }
}


module.exports = {sortScores, increaseScores, squareScores, distributeBooks}