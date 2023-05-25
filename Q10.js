//filter out all the 'apple' in an array of string fruits

let fruitList = ['Banana', 'Apple', 'Orange', 'Apple']

function removeApples(arr) {
    let noApples = []
    for(i=0; i<arr.length; i++) {
        if(arr[i] !== 'Apple') {
            noApples.push(arr[i])
        }
    }

    return noApples
}

console.log(removeApples(fruitList))