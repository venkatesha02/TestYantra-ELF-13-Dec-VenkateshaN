//Named Function
function fibonacci(n1, n2, count) {
    for (let i = 0; i < count; i++) {
        var n3 = n1 + n2;
        console.log("N3 Value ", n3)
        n1 = n2;
        n2 = n3;
    }
}
fibonacci(0, 1, 8)
console.log("-------------------------")

//Ananymous Function
var a = function(n1, n2, count) {
    for (let i = 0; i < count; i++) {
        var n3 = n1 + n2;
        console.log("N3 Value ", n3)
        n1 = n2;
        n2 = n3;
    }
}
a(0, 1, 8);
console.log("-------------------------")


//IIFE Function
(function(n1, n2, count) {
    for (let i = 0; i < count; i++) {
        var n3 = n1 + n2;
        console.log("N3 Value ", n3)
        n1 = n2;
        n2 = n3;
    }
})(0, 1, 8)
console.log("-------------------------")


//Arrow Function
var c = (n1, n2, count) => {
    for (let i = 0; i < count; i++) {
        var n3 = n1 + n2;
        console.log("N3 Value ", n3)
        n1 = n2;
        n2 = n3;
    }
}
c(0, 1, 8)