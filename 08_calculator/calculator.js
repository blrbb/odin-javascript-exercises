const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(numArray) {
  return numArray.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function(...args) {
    return args.reduce((total, currentNum) => total * currentNum,1);
};

const power = function(x,y) {
	return x^y;
};

const factorial = function(x) {
    let result = 1;
    for (let i = x; i > 0; i--) {
        result *= i;
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
