function multiply (arr , num){
    return function (num){
        return arr.map (n => {
            return n * num
        })
    }
}

console.log(multiply([1, 2, 3])(2))

console.log(multiply([4, 6, 5])(10))

console.log(multiply([1, 2, 3])(0))
