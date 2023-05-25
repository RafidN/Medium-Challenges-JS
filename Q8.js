// Reverse a given string 

function reverseString(str) {
    let temp = ""
    for(i=str.length-1; i>=0; i--) {
        temp+= str[i]
    }

    return temp
}

console.log(reverseString('This is Cool'))