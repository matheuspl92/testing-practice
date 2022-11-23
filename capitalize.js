const capitalize = (string) => {
    let firstCharUpped = string.slice(0, 1).toUpperCase();
    let rest = string.slice(1);

    return firstCharUpped.concat(rest);
};

module.exports = capitalize