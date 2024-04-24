let {sortScores, increaseScores} = require('./task.js')

test("sort student scores", ()=>{
    let testScores = [65, 70, 22, 90, 77]
    let result = sortScores(testScores)
    expect(result).toEqual([70, 90, 77])
})

test("add student scores", ()=>{
    let testScores = [65, 70, 22, 90, 77]
    let result = increaseScores(testScores)
    expect(result).toEqual([70, 75, 27, 95, 82])
})