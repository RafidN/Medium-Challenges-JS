// return array of elements in its boolean values

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]))