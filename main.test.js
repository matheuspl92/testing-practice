const main = require('./main');
const capitalize = require('./capitalize');


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