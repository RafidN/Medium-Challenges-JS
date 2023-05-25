//Filter out all the falsy values 

let falsyArr = ["", [], 0, null, undefined, "0"]

function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(falsyArr))

