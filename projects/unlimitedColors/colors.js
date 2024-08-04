// generate a random color

const randomColor = function(){
    const hex = "01233456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
         color += hex[console.log(Math.floor(Math.random() * 16))]
    }
    return color
}

// console.log(Math.floor(Math.random() * 16));