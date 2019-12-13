var number = [100, 200, 300, 400, 500]

// using callback function
var number1 = number.filter(function(val) {
    if (val > 200) {
        return true
    } else {
        return false;
    }
})

// using arrow function
var number2 = number.filter(val => val > 200)
console.log("Original Array", number);
console.log("After filter using callback function ", number1);
console.log("After filter using arrow function ", number2);

console.log("--------------------------")
var mappedNumber = number.map(function(val, index) {
    val = val + 50;
    return val;
})
console.log("After Map ", mappedNumber)

var mappedNumber1 = number.map(val => val + 50)
console.log("After Map using arrow function ", mappedNumber1)