function red (){
    document.body.style.backgroundColor = "red"
}

function green (){
    document.body.style.backgroundColor = "green"
}

function blue (){
    document.body.style.backgroundColor = "blue"
}





function color (){
    let x = document.getElementById("i1")
    document.body.style.backgroundColor = x.value
}



function text (){
    let a = document.getElementById("i2")
    let b = document.getElementById("h1")
    
    b.innerText = a.value
}


function show (){
    let x = document.getElementById("h2")
    document.getElementById("b4").style.backgroundColor = "green"
    document.getElementById("b4").innerText = "hide"
    x.style.display = "block"
}


function rotate (){
    let d2 = document.getElementById("d2")
    let i3 = document.getElementById("i3")
    let value = i3.value
    d2.style.transform = "rotate(" + value + "deg)"
}


function round (){
    let d3 = document.getElementById ("d3")
    let i4 = document.getElementById ("i4")
    let value = i4.value
    d3.style.borderRadius = value + "px"
}







