const palindromes = function (str) {
  const newStr = str.replace(/[^\w\']|_/g, "")
                    .replace(/\s+/g, " ").toLowerCase();
  // console.log('newStr: ' + newStr + '..')
  const reversedString = newStr.split('').reverse().join('');
  // console.log('reversed: ' + reversedString + '..')

  if (newStr === reversedString) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
