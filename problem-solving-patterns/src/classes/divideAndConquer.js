function search(array, number){
    let minIndex = 0;
    let maxIndex = array.length - 1;

    while(minIndex <= maxIndex){
        let middleArrayIndex = Math.floor((minIndex + maxIndex)/2);
        
        if(array[middleArrayIndex] > number) maxIndex = middleArrayIndex - 1;
        else if(array[middleArrayIndex] < number) minIndex = middleArrayIndex + 1;
        else return middleArrayIndex;
    }

    return -1;
};

console.log(search([1,2,3,4,5,6,7,8,9], 3));