const sumItems = function(array, index = 0, total = 0) {
  // Sum all the numbers in the array



  if (index - array.length === 0) {
    return total;
  } else {
    if (Array.isArray(array[index])) {
      array = array.flatMap(element => element);
    }
    return sumItems(array, index + 1, total = total + Number(array[index]));
  }
};

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));

module.exports = sumItems;