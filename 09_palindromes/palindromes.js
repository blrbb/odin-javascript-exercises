const palindromes = function (stringInput) {
    let regex = /[^A-Za-z0-9]+/g;
    let original = stringInput.replace(regex,"").toLowerCase();
    
    let reversed = original.split("").reverse().join("");
    console.log( "Palindrome: ", original === reversed, "\n", original + " ", reversed)
    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
