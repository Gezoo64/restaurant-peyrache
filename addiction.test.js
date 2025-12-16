const {calculerAddition, appliquerReduction} = require("./addition.js");

test("Test calculerAddition(15, 5) => 20", ()=>{
    expect(calculerAddition(15, 5)).toBe(20)
})
test("Test appliquerReduction(100, 10) => 90", ()=>{
    expect(appliquerReduction(100, 100)).toBe(90)
})
