const reverseString = function(string) {
  // let split = string.split('');
  // let reversed = split.reverse();
  // let reversedString = reversed.join('');

  let reversedString = string.split('').reverse().join('');

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
