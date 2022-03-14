const sumAll = function(num1,num2) {
    let sum;
    // First of all, I need to control if parameters adjust to expected types and format
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        sum = 'ERROR';
    } else {
        sum = 0;
        if (num2 > num1) {
            // Down to Top loop
            for (let i = num1; i <= num2; i++) {
                sum += i;
            }
        } else if (num1 > num2) {
            // Top to Down loop
            for (let i = num1; i >= num2; i--) {
                sum += i;
            }
        }
        else {
            sum = num1;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
