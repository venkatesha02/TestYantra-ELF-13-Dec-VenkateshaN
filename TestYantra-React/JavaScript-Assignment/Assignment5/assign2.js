let ulELe1 = `<table border=1>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                    </tr>
                    <tr>
                        <td>Raju</td>
                        <td>12</td>
                        <td>benglure</td>
                        <td>12-nov-2019</td>
                    </tr>
                </table>`
let divEle1 = document.getElementById("tab")
divEle1.innerHTML = ulELe1;

let tab = document.createElement('table')

const trEle = document.createElement('tr')
const thEle = document.createElement('th')
thEle.textContent = 'Name'
const thEle1 = document.createElement('th')
thEle1.textContent = 'Age'
const thEle2 = document.createElement('th')
thEle2.textContent = 'Address'
const thEle3 = document.createElement('th')
thEle3.textContent = 'Date of Birth'

const trEle1 = document.createElement('tr')

const tdEle = document.createElement('td')
tdEle.textContent = 'Raju'
const tdEle1 = document.createElement('td')
tdEle1.textContent = '12'
const tdEle2 = document.createElement('td')
tdEle2.textContent = 'Benglure'
const tdEle3 = document.createElement('td')
tdEle3.textContent = '12-nov-2019'

trEle.appendChild(thEle)
trEle.appendChild(thEle1)
trEle.appendChild(thEle2)
trEle.appendChild(thEle3)

trEle1.appendChild(tdEle)
trEle1.appendChild(tdEle1)
trEle1.appendChild(tdEle2)
trEle1.appendChild(tdEle3)

tab.appendChild(trEle)
tab.appendChild(trEle1)

document.body.appendChild(tab)