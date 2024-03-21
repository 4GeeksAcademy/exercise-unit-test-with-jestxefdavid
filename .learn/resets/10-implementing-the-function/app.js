
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };// Declaramos una función con el nombre exacto "formEuroToDollar"

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;    // 1.07 el valor de 1 dollar
}

const fromDollarToYen = function (valueInDollar) {

    let valueDollarInYen = oneEuroIs.JPY / fromEuroToDollar(1); // 1 dollar equivale a 146.26 yenes
    let valueInYen = valueDollarInYen * valueInDollar;
    return valueInYen;

}

const fromYenToPound = function (valueInYen){

    let valueYenInPound = oneEuroIs.GBP / fromDollarToYen(1); //devuelve el valor de una libra en yenes
    let valueInPound = valueYenInPound * valueInYen;
    return valueInPound;
}


console.log(fromYenToPound(1));






module.exports = { sum, fromEuroToDollar,fromDollarToYen}