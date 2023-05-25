// find the sum of an array

let sumArray = [14, 9, 2, 11]

function arrSum(arr) {
    let sum = 0
    for(i=0; i<arr.length; i++) {
        sum+= arr[i]
    }
    return sum
}

console.log(arrSum(sumArray))