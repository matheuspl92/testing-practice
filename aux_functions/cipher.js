const checkUpperCase = require('./checkUpperCase');

const cipher = (arrayToCipher) => {
    const SHIFT = 6;
    let cipherText = '';
    let re = /[A-z]/;
    let isUpperCase = false;

    for (let i = 0; i < arrayToCipher.length; i += 1) {
        if(re.test(arrayToCipher[i])){
            isUpperCase = checkUpperCase(arrayToCipher[i]);
            let cipherChar = String.fromCharCode((arrayToCipher[i].toLowerCase().charCodeAt(0) - 97 + SHIFT)%26 + 97);
            if (isUpperCase){
                cipherChar = cipherChar.toUpperCase();
            }
            cipherText += cipherChar;
        } else {
            cipherText += arrayToCipher[i];
        }
        
    }

    return cipherText;
};

module.exports = cipher;