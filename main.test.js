const main = require('./main');
const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');


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

//caesarCipher

test('cipher "Hello World!" to "Nkrru Cuxrj!"', () => {
    expect(caesarCipher('Hello World!')).toBe('Nkrru Cuxrj!');
});

test('cipher "abcdefghijlkmnopqrstuvwxyz" to "ghijklmnoprqstuvwxyzabcdef"', () => {
    expect(caesarCipher('abcdefghijlkmnopqrstuvwxyz')).toBe('ghijklmnoprqstuvwxyzabcdef');
});

test('cipher "YOU. SHALL. NOT. PASS!!!" to "EUA. YNGRR. TUZ. VGYY!!!"', () => {
    expect(caesarCipher('YOU. SHALL. NOT. PASS!!!')).toBe('EUA. YNGRR. TUZ. VGYY!!!');
});

//analyzeArray

test('array [1, 2, 3, 4, 5]', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({average: 3, min: 1, max: 5, length: 5});
});

test('array [0, 0, 0, 0, 0]', () => {
    expect(analyzeArray([0, 0, 0, 0, 0])).toEqual({average: 0, min: 0, max: 0, length: 5});
});

test('array [68, 18, 14, 10, 12, 6, 2, 2, 8, 10]', () => {
    expect(analyzeArray([68, 18, 14, 10, 12, 6, 2, 2, 8, 10])).toEqual({average: 15, min: 2, max: 68, length: 10});
});