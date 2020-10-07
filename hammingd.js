var hammingDistance = function(x, y) {
//simply clean
    let xBits = x.toString(2)
    let yBits=  y.toString(2)
    let diff = 0

    if(xBits.length > yBits.length) yBits = yBits.padStart(xBits.length,'0')
    else xBits = xBits.padStart(yBits.length,'0')
    for(let i =0;i<xBits.length;i++){
        if(xBits[i] !== yBits[i]) diff++
    }
    return diff
};
console.log(hammingDistance(1,4))

