const reverseString = function(string) {
    
    let characterArray = string.split('');
    let output = '';
    

    for (let i = characterArray.length - 1; i >= 0; i--) {
        output += characterArray[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
