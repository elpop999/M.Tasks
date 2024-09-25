function testJackpot (array){
    if (array[0] == array[1] == array[2] == array[3]){
        return  true
    }
    else {
        return false
    }

}


console.log(asserttestJackpot(["@", "@", "@", "@"]) )

console.log(testJackpot(["abc", "abc", "abc", "abc"]) )

console.log(testJackpot(["SS", "SS", "SS", "SS"]) )

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]) )

console.log(testJackpot(["SS", "SS", "SS", "Ss"]) )