const twoSum = (array, sum) => {
  if (array.length < 2) {
    return []
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum && (array[i] !== array[j])) {
        return [i, j];
      }
    }
  }
  return [];
}

module.exports = twoSum;