// const removeFromArray = function(arr, numToRemove, ...extraNums) {
//   console.log('extraNums: ' + extraNums)
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === numToRemove) continue;
//     newArr.push(arr[i])
//   }
//   console.log('newArr: ' + newArr)
//   return newArr;
// };

const removeFromArray = function(arr, ...numsToRemove) {
  const newArr = [];
  arr.forEach((num) => {
    if (!numsToRemove.includes(num)) {
      newArr.push(num);
    }
  })
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
