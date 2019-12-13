function outer() {
    let num = 10

    function inner() {
        console.log("Number ", num)
        num++
    }
    //console.log("Outer function")
    return inner;
}
let innerfun = outer();
innerfun()
innerfun()
innerfun()
innerfun()
innerfun()
innerfun()


console.log(raju)
let raju
console.log(raju)