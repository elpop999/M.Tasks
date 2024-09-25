function  lessThanOrEqualToZero (num){
if (num <= 0) {
    return true
}
else{return false}
}

console.log(lessThanOrEqualToZero(5))

console.log(lessThanOrEqualToZero(0))

console.log(lessThanOrEqualToZero(-2))

1

function isSameNum (num1 , num2){
    if(num1 === num2){
        return true
    }
    else{
        return false
    }
}

console.log(isSameNum(4, 8))

console.log(isSameNum(2, 2))

console.log(isSameNum(2, "2"))

2

function profitableGamble (num1 , num2 , num3){
    if(num1 * num2 > num3){
        return true
    }
    else{
        return false
    }
}


console.log(profitableGamble(0.2, 50, 9))

console.log(profitableGamble(0.9, 1, 2))

console.log(profitableGamble(0.9, 3, 2))

3

function boolToString (bolean){
    if(bolean === true){
        return "true"
    }
    if(bolean === false){
        return "false"
    }
}

console.log(boolToString(true))

console.log(boolToString(false))

4

function greeting(name){
    if(name == "Mubashir"){
        return ( "Hello ," + "my love" + "!")}
    else{
        return ( "hello ," + name + "!")
    }
}

    console.log(greeting("Matt"))
    
    console.log (greeting("Helen"))
    
    console.log (greeting("Mubashir"))

5

function makesTen (num1 , num2){
    if(num1 + num2 ==10 || num1 ==10 || num2 ==10){
        return true
    }
    else{
        return false
    }
}

console.log(makesTen(9, 10))

console.log(makesTen(9, 9))

console.log(makesTen(1, 9))

6

function comp( str1 , str2 ){
    if(str1.length === str2.length){
        return true
    }
    else{
        return false
    }
}
console.log(comp("AB", "CD"))

console.log(comp("ABC", "DE"))

console.log(comp("hello", "edabit"))

7

function divisible (num) {
    if(num % 100 === 0 ){
        return true
    }
    else{
        return false
    }
}

console.log(divisible(1))

console.log(divisible(1000) )

console.log(divisible(100) )

8

function acceptIntoMovie (age , isSupervised){
    if(age >=15 || isSupervised) {return true}
    return false
}

console.log(acceptIntoMovie(14, true))

console.log(acceptIntoMovie(14, false))

console.log(acceptIntoMovie(16, false))

9

function oddOrEven (str) {
    if (str.length % 2 === 0){
        return true
    }
    return false
}

console.log(oddOrEven("apples") )

console.log(oddOrEven("pears") )

console.log(oddOrEven("cherry") )

10

function leapYear ( num ){
    if( num % 4 === 0 ){
        return true
    }
    return false
}

console.log(leapYear(1990))

console.log(leapYear(1924) )

console.log(leapYear(2021) )

11

function areaShape (b , h , sh){
    if(sh == "triangle" ){
        return .5 * b * h
    }
    else if (sh == "parallelogram"){
        return b * h
    }
}

console.log(areaShape(2, 3, "triangle")) 

console.log(areaShape(8, 6, "parallelogram"))

console.log(areaShape(2.9, 1.3, "parallelogram"))

12

function word (str){
     if(  str ==="one"){return 1}
    else if(str ==="two"){return 2}
    else if(str ==="three"){return 3}
    else if(str ==="four"){return 4}
    else if(str ==="five"){return 5}
    else if(str ==="six"){return 6}
    else if(str ==="seven"){return 7}
    else if(str ==="eight"){return 8}
    else if(str ==="nine"){return 9}
    else if(str ==="zero"){return 0}}

console.log(word("one") )

console.log(word("two") )

console.log(word("nine") )

13

function relationToLuke (str){
    if(str === "Darth Vader" ){
        return "Luke, I am your father."
    }
    else if (str === "Leia"){
        return "Luke, I am your sister."
    }
    else if(str === "Han"){
        return "Luke, I am your brother in law."
    }
}

console.log(relationToLuke("Darth Vader") )

console.log(relationToLuke("Leia"))

console.log(relationToLuke("Han") )

14

function journeyDistance ( cost){
    if( cost ===3 ){
        return 1
    }
    else if (cost > 3){
        cost -= 3
        let kilos = cost /2
        return kilos + 1
    }
}

console.log(journeyDistance(3) )

console.log(journeyDistance(9))

console.log(journeyDistance(5) )

15

function calculateExponent (num1 , num2){
    if(num1 === num2){
        return num1 ** num2
    }
}

console.log(calculateExponent (5,5))

console.log(calculateExponent (10,10))

console.log(calculateExponent (3,3))

16

function findindex (arr ,str){
    for(let ind = 0 ; ind < arr.length ; ind++)
    if(arr [ind] == str)return ind    
}

console.log(findindex["hi","edabit","fgh","abc"],"fgh")

console.log(findindex["red" , "blue" , "Blue" , "green"] , "blue")

console.log(findindex["a" , "g" , "y" , "d"] , "d")

console.log(findindex ["Pineapple" , "Orange" , "Grape" ,"Apple" ], "Pineapple")

17

function arrayValuesTypes(arr){
    let result = []
    for (let i in arr){
        result [i] = typeof arr[i]
    }
    return result
}

console.log(arrayValuesTypes([1, 2, "null", []]))

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))

console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))

18

function  length(str){
    for( let i of str){
        console.log(Number (str))
    }
    
}

console.log(length("Hello World") )

console.log(length("Edabit") )

console.log(length("wash your hands!"))

19

function addIndexes (arr){
    let result = []
    for (let i in arr ){
       result [i] = Number (i) + arr[i]
    }
    return result
}

 console.log(addIndexes([0, 0, 0, 0, 0])) 

console.log(addIndexes([1, 2, 3, 4, 5]))

console.log(addIndexes([5, 4, 3, 2, 1]) )

20

function addOddToN (num ){
    let result = 0
        for ( let i = 0 ; i <= num ; i++ ){
            if(i % 2 == 1){
                result += i
            }
        }
            return result
    }

console.log(addOddToN(5) )

console.log(addOddToN(13))

console.log(addOddToN(47))

21

function filterArray (arr) {
    let result = []
        for(let x of arr){
           if(typeof x ==="number"){
            result.push (x)
        }
        }
            return result
}

console.log(filterArray([1, 2, 3, "a", "b", 4]))

console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]))

console.log(filterArray(["Nothing", "here"]) )

22

function squaresSum (num){
    let result = 0 
    for (let y = 0 ; y <= num ; y++){
            result +=  y**2
        }
    return result
}

console.log (squaresSum(3) )

console.log (squaresSum(12) )

console.log (squaresSum(13) )

23

function integerBoolean (str){
   let x =[]
   for (let i of str){
    if(i == 1){
        x.push(true) 
    }
    else {
       x.push(false) 
    }
   }
   return x
}

console.log(integerBoolean("100101"))

console.log(integerBoolean("10"))

console.log(integerBoolean("001"))

24

function nTablesPlusOne (num){
    let result =""
    for(let x = 1 ; x <= 10 ; x++){
        result +=(( num * x )+ 1)
        if(x != 10){
            result +=","
        }
    }
    return result
}

console.log(nTablesPlusOne(7) )

console.log(nTablesPlusOne(1) )

console.log(nTablesPlusOne(3) )

25

function makeRug (m, n, s){
    let result = []
    for(let i = 0 ; i <m ;i++){
        let newString = ""
        for(let o = 0 ; o<n ; o++){
            if(s){
                newString += s
            }
            else {
                newString += "#"
            }
        }
        result.push(newString)
    }
    return result

}

console.log(makeRug(3, 5))

console.log(makeRug(3, 5, '$'))

console.log(makeRug(2, 2, 'A'))

26

function  forbiddenLetter (letter,arr){
    let result = true
    for (let str of arr ){
        for(let s of str){
            if(s === letter){
                result = false
            }
        }
    }
    return result
}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]) )

console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]) )

console.log(forbiddenLetter("m", []) )

27

function uploadCount (dates , month){
    let x =0 
    for(let y of dates ){
        if (y.split("") [0] == month){
            x++
        }
    }
    return x
}

console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept") )

console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct"))

28

function getMin (arr){
    let a = arr [0]
    for(let x of arr ){
        if (item < a ){
            a = x
        }
    }
    return a
}

function sumMinimums(arrs){
    let result = 0
    for (let r of arrs ){}
        return result
    
}

console.log(sumMinimums([[1, 2, 3, 4, 5],[5, 6, 7, 8, 9],[20, 21, 34, 56, 100]]))

29

function  findFactors (num){
    let result = []
    for (let i = 1 ; 1 <= num ; i ++ )
        if (num % i == 0){
            result.push(i)
        }

}

console.log(findFactors(9) )

console.log(findFactors(12) )

console.log(findFactors(20) )

console.log(findFactors(0) )

30









