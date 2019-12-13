console.log('-------- using Create element------------')

const ulELe = document.createElement('ul')
ulELe.textContent = 'Brands'
const liEle1 = document.createElement('li')
liEle1.textContent = "Roymends"
const liEle2 = document.createElement('li')
liEle2.textContent = 'Kingfisher'

ulELe.appendChild(liEle1)
ulELe.appendChild(liEle2)

//console.log(ulELe)
document.body.appendChild(ulELe)

console.log('--------------------')
const olELe = document.createElement('ol')
olELe.textContent = 'Brands'
const liEle11 = document.createElement('li')
liEle11.textContent = "Roymends"
const liEle21 = document.createElement('li')
liEle21.textContent = 'Kingfisher'

olELe.appendChild(liEle11)
olELe.appendChild(liEle21)

console.log(olELe)
document.body.appendChild(olELe)

let ulELe1 = `<ul>
                <li>Brands</li>
                <li>Roymends</li>
                <li>Kingfisher</li>
            </ul>`
let divEle1 = document.getElementById("ullist")
divEle1.innerHTML = ulELe1;


let ulELe2 = `<ol>
                <li>Brands</li>
                <li>Roymends</li>
                <li>Kingfisher</li>
            </ol>`
let divEle2 = document.getElementById("ollist")
divEle2.innerHTML = ulELe2;