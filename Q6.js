//Given num of seconds, return in format mm:ss

function calcTime(secVal) {
    let minute = 0
    let second = secVal
    while(second - 60 >= 0) {
        minute++
        second-=60
    }
    
    if(minute.toString().length === 1) {
        minute = '0' + minute
    }

    if(second.toString().length === 1) {
        second = '0' + second
    }

    return (minute + ":" + second)
}

console.log(calcTime(66))