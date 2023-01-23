function areThereDuplicates(...props){
    let elementsAnalyzeds = {};
    for(const element of props){
        elementsAnalyzeds[element] = (elementsAnalyzeds[element] || 0) + 1;
    }

    for(const key in elementsAnalyzeds){
        if(elementsAnalyzeds[key] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 