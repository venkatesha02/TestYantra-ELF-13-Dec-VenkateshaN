// Object Destucturing
const person = {
    name: 'Raj',
    age: 80,
    weight: 60,
    hobbies: ['Acting', 'Singing']
}

const { hobbies } = person
console.log('Hobbies ', hobbies)

function displyHobbies({ hobbies }) {
    for (const hobby of hobbies) {
        console.log(hobby.toUpperCase())
    }
}
displyHobbies(person)


//Array Destucturing

const numbers = [100, 200, 300, 400]
const [num1, num2] = numbers
console.log('Num1 ', num1)
console.log('Num2 ', num2)

const item = [{
        name: 'watch',
        brand: 'Fast track',
        price: 2000
    },
    {
        name: 'Lipstick',
        brand: 'Lakme',
        price: 300
    },
    {
        name: 'mobile',
        brand: 'iphone',
        price: 30000
    }
]

const [item1, item2] = item;
console.log('Item 1 ', item1)
console.log('Item 2 ', item2)

console.log('Item 1s Name', item1.name)