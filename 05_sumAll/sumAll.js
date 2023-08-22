const sumAll = function(firstNum, lastNum) {
  if (firstNum < 0 || lastNum < 0) return 'ERROR';
  if (typeof firstNum !== 'number' || typeof lastNum !== 'number') return 'ERROR';
  let sum = 0;
  if (firstNum > lastNum) {
    let placeholder = firstNum;
    firstNum = lastNum;
    lastNum = placeholder;
  }
  for (let i = firstNum; i <= lastNum; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
