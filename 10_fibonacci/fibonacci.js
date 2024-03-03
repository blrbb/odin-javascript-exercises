const fibonacci = function(number) {
    let thisNum = 0;
    let prevNum;
    let nextNum = 1;
    
    for (let i = 0; i < number; i++) {
        prevNum = thisNum;
        thisNum = nextNum;
        nextNum = thisNum + prevNum;
    }
    
        return thisNum > 0 ? thisNum : "OOPS";

};
console.log(fibonacci(-5));
// Do not edit below this line
module.exports = fibonacci;
