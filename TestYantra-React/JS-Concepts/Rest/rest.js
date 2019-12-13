function sum(...num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
let val1 = sum(10, 20)
let val = sum(10, 20, 30, 50, 50, 50)
console.log("sum is ", val1)
console.log("sum is ", val)

console.log("-------------------------")

function printAnimal(animal1, animal2, ...animals) {
    console.log(animal1)
    console.log(animal2)

    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i])
    }
}
printAnimal('Lion', 'Tiger', 'Cow', 'Dog')