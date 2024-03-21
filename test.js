const { sum, fromDollarToYen, fromEuroToDollar,fromYenToPound } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("one dollar should be 146.26 yenes", function() {
    const {fromDollarToYen} = require('./app.js');
    const yenes = fromDollarToYen(1);
    const expected = 1 * 146.26

    expect(fromDollarToYen(1)).toBe(146.26168224299064)

})
test("one yen should be  0.0055591054313099035 pounds",function(){
    const {fromYenToPound} = require ('./app.js');
    const pounds = fromYenToPound(1);
    const expected = 1 *(0.0055591054313099035)

    expect(fromYenToPound(1)).toBe(0.0055591054313099035)
})
