//Given an array, find the largest number

let largestArray = [5, 100, -2, 410] 

function getMax(arr) {
    let highestVal = arr[0]
    for(i=1; i<arr.length; i++) {{
        if(arr[i] > highestVal) {
            highestVal = arr[i]
        }
    }}

    return highestVal
}

console.log(getMax(largestArray))