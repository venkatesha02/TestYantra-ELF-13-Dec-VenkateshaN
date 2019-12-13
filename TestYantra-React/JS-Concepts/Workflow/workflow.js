/* function first() {
    setTimeout(function() {
        console.log("First func");
    }, 0)
    console.log("second function");
}

function second() {
    setTimeout(function() {
        console.log("Second fun");
    }, 0)
    console.log("second function");
}

first();
second();
console.log("-----------------------------") */

function first(callback) {
    setTimeout(function() {
        console.log("First func");
        callback();
    }, 0)
}

function second() {
    console.log("second function");
}
first(second);