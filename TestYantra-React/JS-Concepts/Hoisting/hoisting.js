console.log(personName)
var personName = 'vinay'
console.log('Name is ', personName)


hoisting();

function hoisting() {
    console.log(message)
    var message = 'Javascript is very easy!!!';
    console.log(message)
}