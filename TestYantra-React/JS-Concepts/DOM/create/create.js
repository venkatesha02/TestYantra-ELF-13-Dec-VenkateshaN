let element = document.createElement('p')
element.textContent = "Javascript is easy"
console.log(element)

document.body.appendChild(element)
    //document.head.appendChild(element)

const ulELe = document.createElement('ul')
ulELe.textContent = 'Lipstick'
const liEle1 = document.createElement('li')
liEle1.textContent = "Lakme"
const liEle2 = document.createElement('li')
liEle2.textContent = 'Lorel'

ulELe.appendChild(liEle1)
ulELe.appendChild(liEle2)

console.log(ulELe)
document.body.appendChild(ulELe)

console.log('--------------------')
const olELe = document.createElement('ol')
olELe.textContent = 'Bike'
const liEle11 = document.createElement('li')
liEle11.textContent = "Honda"
const liEle21 = document.createElement('li')
liEle21.textContent = 'Pulsur'

olELe.appendChild(liEle11)
olELe.appendChild(liEle21)

console.log(olELe)
document.body.appendChild(olELe)



let a = ['venki', 'vinay', 'vidya', 'goutham', 'nidhin', 'shibhu', 'chaithra', 'prathyasha', 'rakesh', 'priyanka']

function buttons() {
    for (let i = 0; i < a.length; i++) {

        let button = document.createElement('button')
        button.textContent = a[i]
        console.log(button)
        document.body.appendChild(button)
    }
}
//buttons();


let item = `<ul>
            <li>A</li>
            <li>B</li>
            <button>Click Me</button>
        </ul>`
let divEle = document.getElementById("lilist")
divEle.innerHTML = item;