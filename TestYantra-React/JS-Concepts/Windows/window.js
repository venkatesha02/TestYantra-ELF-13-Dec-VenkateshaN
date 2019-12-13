//alert("hello World!!!")

// let result = confirm("Are you 18 year old")
// console.log("Result ", result)

// let userName = prompt("Enter your Name")
// console.log("User Name is ", userName)

// let gmail = prompt("Enter your Gmail", 'abc@123.com')
// console.log("Gmail is  ", gmail)


var userName = 'Venki'
var gmail = 'venki@123.com'

function testWindow() {
    console.log('Testing window Object')
}
testWindow()

console.log(window.userName)
console.log(this.gmail)
    // console.log(this === window)

window.testWindow()
this.testWindow()