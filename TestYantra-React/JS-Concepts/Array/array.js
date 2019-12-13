var fruits = ["Apple", "Mango", 'Orange', `Butterfruit`]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

console.log('--------------------------------')
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruits are ", fruits[i])
}

console.log('--------------------------------')

var person = ['Anu', 40, true, null, undefined]

for (var i = 0; i < person.length; i++) {
    console.log("Person data ", person[i])
}

console.log('--------------------------------')

var num = 10
var str = `10`
if (num === str) //Strict equal to operater( it checks data type of both variable and values)
{
    console.log("Equal")
} else {
    console.log("Not Equal")
}

console.log('--------------------------------')
if (num !== str) //Strict not equal to operater( it checks data type of both variable and values)
{
    console.log("Equal")
} else {
    console.log("Not Equal")
}