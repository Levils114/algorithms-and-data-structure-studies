function bubbleSort(array) {
  let noSwaps;

  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return array;
}

console.log(bubbleSort([0, 10, 2, 5]));
