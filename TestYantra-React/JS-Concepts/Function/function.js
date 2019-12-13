// Named Function

function add(a, b) {
    var sum = a + b
    console.log("Sum is ", sum)
}
add(12, 12)

function check(n) {
    console.log("N value is ", n)
}
check()

function Test() {
    console.log("Test Method")
}
Test(25)

// Named Functon
function Multiple(a, b) {
    return a * b
}
var m = Multiple(12, 12)
console.log("Multiplication of a and b ", m)

//Anonymus FUnction

var division = function(x, y) {
    return x / y
}

var r = division(500, 5)
console.log("Divison ", r);

// Self involked function / IIFE (Immediatly invoked function Expression)
//Before and after writing self invoke function put semicolon because curing will happen

(function(p, q) {
    console.log("Value is ", p + q)
})(20, 3);


//Arrow function

var addition = (a, b, c) => {
    return a + b + c
}

var add = (a, b, c) => a + b + c
var num = add(20, 50, 50)
console.log("value ", num)
var res = addition(10, 20, 30)
console.log("Result is ", res)


var sqr = a => a * a
var n = sqr(12)
console.log("Vlaue is ", sqr(10))
console.log("sqr", n)

var greet = () => console.log("Good Evening Ladies and GentalemanS")
greet()