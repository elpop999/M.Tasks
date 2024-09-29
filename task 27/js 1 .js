let vid = document.getElementById("video")

let x = setTimeout(
function play (){
    vid.play()
},
    3000
) 

function pause (){
    vid.pause()
}


function paused (){
    if (vid.paused = false) {
         vid.pause()
    }
    else {
        vid.play()
    }
    5000
}

function speed (){
    vid.playbackRate += .5
}

let set = setTimeout (
    current , 
    5000
)

function stop (){
    clearTimeout (set)
}

function current (){
    vid.currentTime += 2
}

function curren (){
    vid.currentTime -= 2
}

function theme (){
    if (localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme" , "dark")
        document.body.style.backgroundColor = "black"
    }
    else {
        localStorage.setItem("theme" , "light")
        document.body.style.backgroundColor = "white"
    }
}


















