const repeatString = function(str,num) {
    let stResult = '';
    while (num > 0) {
        stResult += str;
        num--;
    }
    if (num < 0) {
        stResult = 'ERROR';
    }
    return stResult;
};

// Do not edit below this line
module.exports = repeatString;
