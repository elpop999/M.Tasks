function calculateFuel (num) {
    let result = 0
    for(let i = 0 ; i<=1 ; i++){
        if( num >= 10){
            return (result = num * 10)
        }
        else{
            return 100
        }
    }
}

console.log(calculateFuel(15) ) 

console.log(calculateFuel(23.5) ) 

console.log(calculateFuel(3) )

31

function hurdleJump (hagz , trainee){
    let check = true
    for (let x of hagz){
        if(x > trainee){
            check =false
        }
    }
    return check
}
    

console.log(hurdleJump([1, 2, 3, 4, 5], 5) ) 

console.log(hurdleJump([5, 5, 3, 4, 5], 3) )

console.log(hurdleJump([5, 4, 5, 6], 10) )

console.log(hurdleJump([1, 2, 1], 1) )


32

function transform (array){
    for( let i in array ){
        if(array[i] %2 == 1 ){
            array[i] = array[i] + 1
        }
        else {
             array[i] = array[i] - 1
        }
    }
    return array
}


console.log(transform([1, 2, 3, 4, 5]) )


console.log(transform([3, 3, 4, 3]) )

console.log(transform([2, 2, 0, 8, 10]) )

33

function flip (num){
    let result = 0
    if (num == 1){
        result = 0
    }
    else if (num == 0) {
        result = 1

    }
    return result
}

console.log(flip(1))

console.log(flip(0))

34


function sayHelloBye (name , num){
    let result = 0
    if (num == 1){
        result = "Hello"  +  name
    }
    else if (num == 0){
        result = " Bye"  +  name
    }
    return result
}



console.log(sayHelloBye("Alon", 1) )

console.log(sayHelloBye("Tomi", 0) )

console.log(sayHelloBye("jose", 0) )

35


function chatroomStatus (array){
    let result = 0
    if(array.length == 0){
        result ="no one online "
    }
    else if (array.length == 1 ){
        result = array [0]
    }
    else if (array.length == 2){
        result = array[0] + "and" + array[1]
    }
    else if (array.length > 2){
        result = array[0] + "and" + array[1] + (array.length-2) + " more online" 

    }

    return result
}


console.log(chatroomStatus([]) )

console.log(chatroomStatus(["paRIE_to"]))

console.log(chatroomStatus(["s234f", "mailbox2"]) )

console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))

36


function testJackpot (array){
    let result = true
    if (array [0] !== array[1] !== array[2] !== array[3]){
        result = false
    }
    return result

}

console.log(testJackpot(["@", "@", "@", "@"]) )

console.log(testJackpot(["abc", "abc", "abc", "abc"]) )

console.log(testJackpot(["SS", "SS", "SS", "SS"]) )

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]) )

console.log(testJackpot(["SS", "SS", "SS", "Ss"]) )


37


















