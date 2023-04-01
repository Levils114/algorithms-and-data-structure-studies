function collectOdds(numbers) {
  let newArray = [];

  if (numbers.length === 0) {
    return newArray;
  }

  if (numbers[0] % 2 !== 0) {
    newArray.push(numbers[0]);
  }

  newArray = newArray.concat(collectOdds(numbers.slice(1)));
  return newArray;
}

const result = collectOdds([10, 11, 12, 13, 14, 15]);
console.log(result);
