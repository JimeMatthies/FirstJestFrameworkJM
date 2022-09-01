const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const {fromEuroToDollar} = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dolar should be 106.58 yenes", function(){
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(2)).toBe(213.16);
})

test("One yen should be 0.006254 punds", function(){
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(200)).toBe(1.2508);
})