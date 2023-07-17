function naiveStringSearch(string, stringToSearch) {
  const stringSize = string.length;
  const stringToSearchSize = stringToSearch.length;

  if (stringToSearchSize > stringSize) return;

  let start = 0;
  let end = stringToSearchSize - 1;

  for (let i = 0; i <= stringSize; i++) {
    let word = "";

    for (let j = start; j <= end; j++) {
      word = word + string[j];
    }

    if (word === stringToSearch) return [start, end];

    start++;
    end++;
  }

  return "não foi encontrado";
}

console.log(naiveStringSearch("wordsVeryGood", "ryGoo"));
