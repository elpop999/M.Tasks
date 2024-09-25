function uniqueStyles (styles) {
    let arr = styles.join (",").split (",")
    let res = []
    for (let style of arr){
        if (!res.includes (style)) res.push (style)
    }
return res.length
}

console.log(uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"]))

console.log(uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"]))
