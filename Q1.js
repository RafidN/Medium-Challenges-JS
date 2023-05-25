//given 2 values return the first one if falsy, else: second one 

function filterOutFalsy(numOne, numTwo) {
    if(numOne == false) {
        return numOne
    }
    else {
        return numTwo
    }
}

console.log(filterOutFalsy(0, 500))