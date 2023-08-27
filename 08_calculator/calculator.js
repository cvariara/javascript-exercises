const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  if (nums.length === 0) return 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    start += nums[i];
  }
  return start;
};

const multiply = function(nums) {
  if (nums.length === 0) return 0;
  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    start *= nums[i];
  }
  return start;
};

const power = function(num, exponent) {
  let value = 1;
  for (let i = 0; i < exponent; i++) {
    value *= num
  }
  return value;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let value = 1;
  for (let i = num; i >= 1; i--) {
    value *= i;
  }
  return value;
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
