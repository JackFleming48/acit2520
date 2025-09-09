// Format x1 y1 x2 y2

function squareRoot(num){
    return Math.sqrt(num)
};

function square(num){
    return (num**2)
};

function distance(x1, y1, x2, y2){
    const d = squareRoot(square(x2-x1) + square(y2-y1))
    return d
};

module.exports = { distance };

// console.log(distance(10, 5, 2, 3))