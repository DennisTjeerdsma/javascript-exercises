const removeFromArray = function() {
    var filteredArray = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        var filteredArray = filteredArray.filter(e => e !== arguments[i]);
    }

    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
