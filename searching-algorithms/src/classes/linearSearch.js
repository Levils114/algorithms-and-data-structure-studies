// Linear Search is a search that check one an one array element to get a value

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch(["maçã", "uva", "pera"], "maçã"));
