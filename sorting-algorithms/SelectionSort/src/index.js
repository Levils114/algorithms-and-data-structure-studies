// My Solution
function selectionSort(array) {
  let sortedArray = [];

  let initialIndex = 0;
  let nextIndexToSearch = initialIndex + 1;

  let minorValue = array[initialIndex];

  while (sortedArray.length < array.length) {
    if (
      array[nextIndexToSearch] < array[initialIndex] &&
      array[nextIndexToSearch] < minorValue
    ) {
      minorValue = array[nextIndexToSearch];
    }

    if (nextIndexToSearch >= array.length - 1) {
      const indexOfMinorNumber = array.indexOf(minorValue);
      [array[sortedArray.length], array[indexOfMinorNumber]] = [
        array[indexOfMinorNumber],
        array[sortedArray.length],
      ];
      sortedArray.push(minorValue);

      initialIndex = sortedArray.length;
      nextIndexToSearch = initialIndex + 1;
      minorValue = array[initialIndex];
    } else {
      initialIndex = nextIndexToSearch;
      nextIndexToSearch++;
    }
  }

  return sortedArray;
}

// Class Solution
function classSelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      let temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }

  return array;
}

console.log(selectionSort([123, 12, 45, 23, 0, 1]));
console.log(classSelectionSort([123, 12, 45, 23, 0, 1]));
