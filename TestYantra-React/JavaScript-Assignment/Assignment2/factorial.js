function factorialize(a) {
    if (a === 0 || a === 1)
        return 1;
    for (var i = a - 1; i >= 1; i--) {
        a = a * i;
    }
    return a;
}
var fact1 = factorialize(10);
console.log("the factorial is ", fact1);
console.log("-------------------------");


var fact2 = function(a) {
    if (a === 0 || a === 1)
        return 1;
    for (var i = a - 1; i >= 1; i--) {
        a = a * i;
    }
    return a;
}
var res = fact2(5);
console.log("the factorial is ", res);
console.log("-------------------------");

(function(a) {
    if (a === 0 || a === 1)
        return 1;
    for (var i = a - 1; i >= 1; i--) {
        a = a * i;
    }
    console.log("the factorial is ", a);
    return a;

})(6)
console.log("-------------------------");

var fact3 = a => {
    if (a === 0 || a === 1)
        return 1;
    for (var i = a - 1; i >= 1; i--) {
        a = a * i;
    }
    return a;
}
var res = fact3(10);
console.log("the factorial is ", res);