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
function getAfternoonClasses(classesTime){
    var result = classesTime.filter(time => time.includes("P", time.length-2))
    return result
}

function calculateExpenses(products){
    var total = 0
    for(const expense in products){
        total += products[expense].value
    }
    return total
}


module.exports = {sortScores, increaseScores, squareScores, distributeBooks, getAfternoonClasses, calculateExpenses}