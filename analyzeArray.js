const analyzeArray = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    const average = (sum / array.length) || 0;

    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }

    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }

    return {
        average,
        min,
        max,
        length: array.length
    }

};

module.exports = analyzeArray;