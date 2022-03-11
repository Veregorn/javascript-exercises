const removeFromArray = function(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (typeof arguments[j] === typeof numbers[i]) {
                if (numbers[i] == arguments[j]) {
                    numbers.splice(i,1);
                    i--;
                    break;
                }
            } 
        }
    }
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
