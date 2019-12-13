let ele = document.getElementById('one')
ele.onkeydown = function() {
    console.log("Triggerd")
}

let ele1 = document.getElementById('two')
ele1.addEventListener('keyup', function() {
    console.log("Key up event ")
})


let pEle = document.createElement('p')
let p = document.getElementById("p")

let ele2 = document.getElementById('two')
ele2.addEventListener('keyup', function() {

    pEle.textContent = ele2.value;

    p.textContent = ele2.value

    document.body.appendChild(pEle)

})

let ele3 = document.getElementById('three')
ele3.addEventListener('keydown', function() {

    ele3.textContent = ele3.value

})