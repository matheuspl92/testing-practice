const main = require('./main');
const capitalize = require('./capitalize');
const reverseString = require('./reverseString');


test('adds 1 + 2 to equal 3', () => {
    expect(main(1, 2)).toBe(3);
});

test('capitalize first letter in dog returning Dog', () => {
    expect(capitalize('dog')).toBe('Dog');
});

test('capitalize first letter in bRaZiL returning BRaZiL', () => {
    expect(capitalize('bRaZiL')).toBe('BRaZiL');
});

test('capitalize first letter in ELEPHANT returning ELEPHANT', () => {
    expect(capitalize('ELEPHANT')).toBe('ELEPHANT');
});

test('reverse string "My name is John Cena" to "aneC nhoJ si eman yM"', () => {
    expect(reverseString('My name is John Cena')).toBe('aneC nhoJ si eman yM');
});

test('reverse string "arara" to "arara"', () => {
    expect(reverseString('arara')).toBe('arara');
});

test('reverse string "SENTA A PUA" to "AUP A ATNES"', () => {
    expect(reverseString('SENTA A PUA')).toBe('AUP A ATNES');
});