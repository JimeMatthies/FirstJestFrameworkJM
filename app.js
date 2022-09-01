const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
console.log(fromEuroToDollar(10)) 

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 106.58;
    return valueInYen;
}
console.log(fromDollarToYen(10))

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.006254;
    return valueInPound;
}
console.log(fromYenToPound(10))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };