const person = {
    name: 'Rajkumar',
    age: 60,
    color: 'gray',
    hobbies: ['Acting', 'Cricket', 'Singing'],
    address: {
        city: 'benglore',
        pincode: 577451
    },
    fun: function() {
        let ab = ['Acting', 'Cricket', 'Singing']
        return ab;
    },
    d: new Date(),
    c: undefined,
    h: Math.max(20, 50, 80)

}


const jsonPerson = JSON.stringify(person)
console.log("Person objecct ", person)

console.log("JSON Person objecct ", jsonPerson)

const jsPerson = JSON.parse(jsonPerson)

console.log('Js Person object ', jsPerson)