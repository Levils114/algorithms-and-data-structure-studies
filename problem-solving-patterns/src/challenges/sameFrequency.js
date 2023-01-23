function sameFrequency(number1, number2){
    let number1Splitted = String(number1).split('');
    let number2Splitted = String(number2).split('');

    if(number1Splitted.length !== number2Splitted.length) return false;

    let number1FrequencyNumbers = {};
    let number2FrequencyNumbers = {};

    for(const number of number1Splitted){
        number1FrequencyNumbers[number] = (number1FrequencyNumbers[number] || 0) + 1;
    }

    for(const number of number2Splitted){
        number2FrequencyNumbers[number] = (number2FrequencyNumbers[number] || 0) + 1;
    }

    for(const element in number1FrequencyNumbers){
        if(!(element in number2FrequencyNumbers)) return false;
        else if(number1FrequencyNumbers[element] !== number2FrequencyNumbers[element]) return false;
    }

    return true;
}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false