function isRepdigit (num){
    if ( num < 0 ) return false
    let str = String(num)
    for (let i of str){
        if (i != str [0]) return false
    }
    return true
}

console.log(isRepdigit(66))

console.log(isRepdigit(0))

console.log(isRepdigit(-11))