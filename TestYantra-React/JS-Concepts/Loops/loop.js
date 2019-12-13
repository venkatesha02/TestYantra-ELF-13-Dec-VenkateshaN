var fruits = ['Mango', 'Apple', 'Orange', 'Graps', 'Kiwi']

console.log("---------Using for Loop----------");

//for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruits ", fruits[i]);
}
console.log("---------Using for of loop----------");

//for of loop :-)
//it is used for arrays, the variable fruits holds the value of the index. 
//it will stores the values inside the fruit variable
for (var fruit of fruits) {
    console.log("Fruits are ", fruit)
}


//for in loop :-) 
//it is used for arrays and Objects, the variable fruits holds the index.
console.log("---------Using for in loop----------");
console.log("---------1. Using for in loop on arryas----------");

for (var i in fruits) {
    console.log("Index ", i);
    console.log("Fruits are ", fruits[i]);
}

console.log("---------2. Using for in loop on Objects----------");
var person = {
    name: 'Priyanka',
    college: 'APS',
    hasBF: false
}
for (var key in person) {
    console.log("Key is ", key);
    console.log("Values are ", person[key]);
}

console.log("---------2. Using forEach function on Objects----------");
//foreach it is a function, it is accepts only arrays 
fruits.forEach(function(value, index) {
    console.log("Index is ", index)
    console.log("Value is ", value)
});