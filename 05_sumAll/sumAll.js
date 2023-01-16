const sumAll = function(a, b) {
    let total = 0;

    if ( a < 0 || b < 0  || !Number.isInteger(a) || !Number.isInteger(b) ) {
        return "ERROR";
    }

    if (b < a) {
        [a, b] = [b, a];
    }

    for (var i = a; i <= b; i++){
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
