//Add up the numbers from a single number 
// given a single number, add up all numbers from one to the number given

function progressiveSum(num) {
    let sum = 0
    for(i=1; i<=num; i++) {
        sum+=i
    }
    return sum
}

console.log(progressiveSum(600))