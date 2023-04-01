function collectOdds(numbers) {
  let result = [];

  function helper(numbers) {
    if (numbers.length === 0) return;

    if (numbers[0] % 2 !== 0) {
      result.push(numbers[0]);
    }

    helper(numbers.slice(1));
  }

  helper(numbers);

  return result;
}

const result = collectOdds([1, 2, 3, 4, 5]);
console.log(result);
