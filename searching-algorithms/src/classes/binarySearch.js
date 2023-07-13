/*
  - Binary Search is faster than Linear Search
  - Rather eliminate one an one element, like Linear Search, eliminate half of remaining elements
  - Only works in sorted arrays
*/

function binarySearch(sortedArray, value) {
  let leftPointIndex = 0;
  let rightPointIndex = sortedArray.length - 1;
  let middleIndex = Math.floor((leftPointIndex + rightPointIndex) / 2);

  while (
    sortedArray[middleIndex] !== value &&
    leftPointIndex <= rightPointIndex
  ) {
    if (value < sortedArray[middleIndex]) rightPointIndex = middleIndex - 1;
    else leftPointIndex = middleIndex + 1;

    middleIndex = Math.floor((leftPointIndex + rightPointIndex) / 2);
  }

  if (sortedArray[middleIndex] === value) return middleIndex;

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
