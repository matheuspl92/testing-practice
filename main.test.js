const main = require('./main');
const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');


test('adds 1 + 2 to equal 3', () => {
    expect(main(1, 2)).toBe(3);
});

//capitalize

test('capitalize first letter in dog returning Dog', () => {
    expect(capitalize('dog')).toBe('Dog');
});

test('capitalize first letter in bRaZiL returning BRaZiL', () => {
    expect(capitalize('bRaZiL')).toBe('BRaZiL');
});

test('capitalize first letter in ELEPHANT returning ELEPHANT', () => {
    expect(capitalize('ELEPHANT')).toBe('ELEPHANT');
});

//reverseString

test('reverse string "My name is John Cena" to "aneC nhoJ si eman yM"', () => {
    expect(reverseString('My name is John Cena')).toBe('aneC nhoJ si eman yM');
});

test('reverse string "arara" to "arara"', () => {
    expect(reverseString('arara')).toBe('arara');
});

test('reverse string "SENTA A PUA" to "AUP A ATNES"', () => {
    expect(reverseString('SENTA A PUA')).toBe('AUP A ATNES');
});

//calculator

test('add 18 to 13 and returns 31"', () => {
    expect(calculator.add(18,13)).toBe(31);
});

test('subtract 18 to 13 and returns -5"', () => {
    expect(calculator.subtract(13,18)).toBe(-5);
});

test('multiply 18 by 13 and returns 234"', () => {
    expect(calculator.multiply(18,13)).toBe(234);
});

test('divide 18 by 13 and returns 1"', () => {
    expect(calculator.divide(18,13)).toBeCloseTo(1.384);
});
