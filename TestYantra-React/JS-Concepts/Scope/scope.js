console.log('----var key word------')

//var key word 
var a;
//globel scope
var a = 10;

function check() {
    //function scope
    var b = 20
    console.log("b Value is ", b)
}
check();
for (var i = 0; i < 5; i++) {
    //block Scope
}
console.log("i vale is ", i)

console.log('----------------------------------------------------------------')
console.log('----let key word------')

//globel scope
//console.log("X value is",x); it will not hoisted
//let x;
let x = 10;
// let x = 20; no Redeclaration
x = 30;

function test() {
    let y = 10;
    console.log('Y Value is ', y) // it have function scope
}
test()

for (let j = 0; j < 2; j++) {
    console.log("j value is ", j) //it have block scope
}

console.log('--------------------------------------------------------------')
console.log('----const key word------')
    //it have globel scope, function scope ,block scope
    // only declare and initialize

const q = 10;
// const q = 109 no redeclaration

//q = 20 no re assignment

const items = ['watch', 'shoes', 'chocolets', 'mobile']
items.push('laptops')
console.log("Items ", items)
    // items = [] no reassignment

const person = {
    name: 'Nazria Nazim'
}
console.log("Person ", person)
    /* const person = {
        name: 'Nazria Nazim'
    } */

person.name = 'Samanta'

console.log("Person ", person)