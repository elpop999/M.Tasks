let div = document.getElementById("d1")
let btn = document.createElement("button")
let inp = document.createElement("input")
let textarea = document.createElement("textarea")


function firstbtn () {
    let div2 = document.createElement("div")
    inp.setAttribute = ("type" , 'text')
    let p1 = document.createElement("p")
    p1.innerText = "Title"
    let p2 = document.createElement("p")
    p2.innerText = "Description"


    div2.style.backgroundColor = "black"
    div2.style.width = "300px"
    div2.style.height = "300px"
    div2.style.gap = "20px"
    p1.style.color = "white"
    p2.style.color = "white"

    btn.style.width = "80px"
    btn.style.height = "25px"



    document.body.append(div2)
    div2.append(p1, inp , p2 , textarea , btn)
}



btn.onclick =  function (){
    let dived = document.createElement("div")
    let par = document.createElement("p")
    let te = document.createElement("p")


    par.innerText = inp.value

    te.innerText = textarea.value

    dived.style.width = "200px"
    dived.style.backgroundColor = "black"
    par.style.color = "white"
    te.style.color = "white"


    par.style.fontSize = "20px"
    te.style.fontSize = "30px"
             

    document.body.append(dived)
    dived.append(te , par)
}