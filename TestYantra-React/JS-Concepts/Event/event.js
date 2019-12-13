function greet() {
    alert('Welcome to Javascript!!!')
}

let ptag = document.createElement('p')
ptag.textContent = "Hello"

function elementCreation() {

    document.body.appendChild(ptag)

    let pEle = `<p>Hii</p>`
    let divEle1 = document.getElementById("pEle")
    divEle1.innerHTML = pEle;
}

function showData() {

    const ele = document.getElementById('show')
    console.log(ele.textContent)

}