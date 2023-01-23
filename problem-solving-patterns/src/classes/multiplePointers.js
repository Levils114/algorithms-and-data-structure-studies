function countUniqueValues(array){
    if(array.length === 0) return 0;

    let initialIndex = 0;

    for(let j = 1; j < array.length; j++){
        if(array[initialIndex] !== array[j]){
            initialIndex++;
            array[initialIndex] = array[j];
        }
    }

    return initialIndex + 1;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4