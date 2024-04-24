let {sortScores, increaseScores, squareScores, distributeBooks} = require('./task.js')

test("sort student scores", ()=>{
    let testScores = [65, 70, 22, 90, 77]
    let result = sortScores(testScores)
    expect(result).toEqual([70, 90, 77])
})

test("add student scores", ()=>{
    let testScores = [85, 92, 78, 88, 95]
    let result = increaseScores(testScores)
    expect(result).toEqual([90, 97, 83, 93, 100])
})

test("square student scores", ()=>{
    let integerList = [2, 4, 6, 8, 10]
    let result = squareScores(integerList)
    expect(result).toEqual([4, 16, 36, 64, 100])
})

test("Assign books", ()=> {
    var person1 = {
        name: "Emily",
        book: ""
    }

    var person2 = {
        name: "Jack",
        book: ""
    }

    var person3 = {
        name: "Sophia",
        book: ""
    }

    var person4 = {
        name: "Daniel",
        book: ""
    }

    var readers = [person1, person2, person3, person4]
    distributeBooks(readers)
    expect(readers[0].book).toBe("Emily's book")

})