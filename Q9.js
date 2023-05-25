// turn every element in array into 0

let zeroArray = [5, 2, 1, 8, 12]

function convertToZeros(arr) {
    for(i=0; i<arr.length; i++) {
        arr[i] = 0
    }
}

convertToZeros(zeroArray)
console.log(zeroArray)