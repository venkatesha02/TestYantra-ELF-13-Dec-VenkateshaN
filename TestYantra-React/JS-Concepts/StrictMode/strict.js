// use strict mode
'use strict'

const firstName = 'Bill'
const lastName = 'Gates'

console.log('First Name is ', firstName)
console.log('Last Name is ', lastName)
console.log('------------------------------')

var name = 10
var name = 20
console.log('Name is ', name)
console.log('------------------------------')

function display() {
    console.log('This is ', this)
    console.log('Display function')
}
display()
console.log('------------------------------')

function showData() {
    // this is undefined in strict mode for function
    //which is called like a normal function
    'use strict'
    console.log("this is ", this)
    console.log("showData function")
        // this.data = 'hello'
}
showData()
    //new showData()