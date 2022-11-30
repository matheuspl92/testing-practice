const stringToArray = (string) => {
    const array = [];

    for (let i = 0; i < string.length; i += 1) {
        array.push(string.charAt(i));
    }

    return array;
};

module.exports = stringToArray;