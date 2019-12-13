//spread operator with Array
const numbers = [100, 200, 300]
console.log("Numbers ", numbers)

const copyOfNumber = [...numbers]
console.log('Copy of Numbers ', copyOfNumber)

numbers.push(500)
console.log('After push Numbers ', numbers)
console.log('After push copyOfNumber ', copyOfNumber)

const animals = ['Lion', 'Tiger', 'Cow', 'Dog']
const moreAnimal = ['Giraffe', 'Camel', 'Puma', 'Humans']
const copyOfAnimals = [...animals, ...moreAnimal]

console.log('Copy of animals ', copyOfAnimals)

//spread operator with object
const person = {
    name: 'sundra',
    age: 23,
    height: 5.7,
    weight: 60
}
const copyOfPerson = {...person }

person.name = 'sundri'
console.log('Person object ', person)
console.log('copy of person object ', copyOfPerson)

console.log('---------------------------------')

const teacher = {
    name: 'Ria',
    age: 30,
    color: 'pink',
    subject: ['Social', 'English']
}
const address = {
    city: 'Benglore',
    pincode: 560068,
    landmark: 'BTM'
}
const teacherWithAddress = {...teacher, ...address }
console.log("Teacher with address ", teacherWithAddress)

const teacherWithPhoneno = {
    ...teacher,
    phone: 987987987,
    married: false,
    getName: function() {
        return this.name;
    }
}

console.log('Teacher with phone number ', teacherWithPhoneno)