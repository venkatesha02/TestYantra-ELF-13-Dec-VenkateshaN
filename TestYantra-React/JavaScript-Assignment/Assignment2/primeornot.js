//Named Function 
function prime(n) {
    for (let i = 0; i < n / 2; i++) {
        if (n % i === 0) {
            return false
        }

    }
    return true;
}
var a = 2;
var res = prime(a);
if (res) {
    console.log("is prime ", a)
} else {
    console.log("is Not a Prime ", a)
}

console.log("--------------------------------")

//Anonymus FUnction
var res = function(n) {
    for (let i = 0; i < n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}
var a = 3;
var b = res(a);
if (b) {
    console.log("is prime ", a)
} else {
    console.log("is Not a Prime ", a)
}
console.log("--------------------------------")

//SelfInvoked Function
var aa = 2(function(a) {
    for (let i = 0; i < n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
})(aa)