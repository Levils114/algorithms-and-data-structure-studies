function numbersSum1(number){
    let total = 0;

    for(let i = 1; i <= number; i++){
        total += i;
    }

    console.log(total);
}

//Big O(n)

function numbersSum2(number){
    console.log(number * (number + 1)/2);
}

//Big O(1)

const time1 = performance.now();
numbersSum1(100000000);
const time2 = performance.now();

const time3 = performance.now();
numbersSum2(100000000);
const time4 = performance.now();

console.log(`numbersSum1: ${(time2 - time1)/1000}s ; numbersSum2: ${(time4 - time3)/1000}s`);