//Named Function
var arry = [10, 20, 30, 40];

function add() {
    var element = 0;
    for (let i = 0; i < arry.length; i++) {
        element = element + arry[i];

    }
    console.log("Array Total is ", element)
}
add();
console.log("-------------------------");

//Ananymous Function
var add = function() {
    var element = 0;
    for (let i = 0; i < arry.length; i++) {
        element = element + arry[i];

    }
    console.log("Array Total is ", element)
}
add();
console.log("-------------------------");

//IIFE Function
(function() {
    var element = 0;
    for (let i = 0; i < arry.length; i++) {
        element = element + arry[i];

    }
    console.log("Array Total is ", element)
})();
console.log("-------------------------");


//Arrow Function
var sum = () => {
    var element = 0;
    for (let i = 0; i < arry.length; i++) {
        element = element + arry[i];

    }
    console.log("Array Total is ", element)
}
sum();
console.log("-------------------------");