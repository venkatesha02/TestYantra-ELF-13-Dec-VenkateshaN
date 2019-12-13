/* let pElement = document.getElementById('demo')
let pText = pElement.textContent
console.log("Element is ", pElement)
console.log(pText)

pElement.textContent = "Hello Buddy"
console.log(pElement.textContent)
 */
console.log('--------------------')

/* let testElement = document.querySelector(".test")
console.log(testElement.textContent);

let testElements = document.getElementsByClassName('test')

for (const element of testElements) {

    if (element.textContent === 'Facebook')
        element.textContent = 'Instagram'
    console.log(element.textContent)

} */
console.log('--------------------')

let testElements1 = document.querySelectorAll('.test')
console.log(testElements1)
    //testElements1.textContent = 'venki'
for (const element2 of testElements1) {

    element2.textContent = 'venki'
        /* if (element2.textContent === 'Facebook')
        element2.textContent = 'Instagram'
 */
}
console.log('--------------------')


/* let h2Element = document.querySelectorAll('h2')

//console.log(a);
for (const element1 of h2Element) {

    let ab = element1.textContent.split(' ')
        //console.log(ab)
        //let c = ab.split(" ")
        //console.log(c)
    element1.textContent = ab.join("-")

    console.log(element1.textContent)

} */
console.log('--------------------')

/* let pTag = document.getElementsByTagName('p')
for (const ele of pTag) {

    console.log(ele.textContent)

} */
console.log('--------------------')

/* let name = document.getElementsByName("tes")
for (const ele1 of name) {

    console.log(ele1.textContent)
}
console.log('--------------------')
 */

document.write("Good Morning")