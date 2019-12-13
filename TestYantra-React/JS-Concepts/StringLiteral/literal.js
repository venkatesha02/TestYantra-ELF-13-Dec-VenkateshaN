const person = {
        name: 'prabhas',
        age: 40,
        color: 'white'
    }
    // Using template literal (String interpolation)
console.log(`Name is ${person.name}
Age is ${person.age}
color is ${person.color}
Income is ${25000000*12}`)


function reverString(str) {
    //let str = 'Hello'
    let len = str.length
    let res = ' '
    for (let i = len - 1; i >= 0; i--) {
        res += str[i]
    }

    console.log("Reversed String is ", res)

}
reverString('Hello')
    //console.log("Reversed String is ", reverse)