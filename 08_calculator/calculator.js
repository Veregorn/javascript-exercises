const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
	let result = 0;
  numbers.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(number) {
	let result = 1;
  while (number > 1) {
    result *= number;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
