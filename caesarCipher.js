const cipher = require('./aux_functions/cipher');
const stringToArray = require('./aux_functions/stringToArray');

const caesarCipher = (stringToCipher) => {
    let arrayToCipher = stringToArray(stringToCipher);
    console.log(arrayToCipher);
    return cipher(arrayToCipher);
}

module.exports = caesarCipher;