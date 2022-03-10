const reverseString = function(str) {
    let strResult = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strResult += str[i];
    }
    return strResult;
};

// Do not edit below this line
module.exports = reverseString;
