function validAnagram(string1, string2){
    if(string1.length !== string2.length) return false;

    const string1Splitted = string1.split("");
    const string2Splitted = string2.split("");

    let string1FrequencyCounter = {};
    let string2FrequencyCounter = {};

    for(const letter of string1Splitted){
        string1FrequencyCounter[letter] = (string1FrequencyCounter[letter] || 0) + 1;
    }

    for(const letter of string2Splitted){
        string2FrequencyCounter[letter] = (string2FrequencyCounter[letter] || 0) + 1;
    }

    for(const key in string1FrequencyCounter){
        if(!(key in string2FrequencyCounter)) return false;

        if(string1FrequencyCounter[key] !== string2FrequencyCounter[key]) return false
    }

    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false)) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true