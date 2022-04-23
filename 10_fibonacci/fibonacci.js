const fibonacci = function(index) {
    //First I need to create a initial fibonacci array with 2 elements
    let fibArray = [0,1];
    //If index received is greater than 1 we need to calc more elements in fibonacci sequence
    if (index > 1) {
        for (let i = 2; i <= index; i++) {
            fibArray.push(fibArray[i-2] + fibArray[i-1]);    
        }
        return fibArray[index];
    } else if (index >= 0) {
        return fibArray[index];
    } else {
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;