const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b 
};

const sum = function(array) {
	return array.reduce((acc,curr)=>acc+curr,0)
};

const multiply = function(array) {
  return array.reduce((acc,curr)=>acc*curr);

};

const power = function(a,n) {
  return a ** n;
	
};

const factorial = function(a) {
    let product = 1;
  for(let i = a;i>0;i--){
    product *= i;
  }
  return product;
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
