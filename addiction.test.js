const {calculerAddition} = require("./addition.js");

test("Test calculerAddition(15, 5) => 20", ()=>{
    expect(calculerAddition(15, 5)).toBe(20)
})
