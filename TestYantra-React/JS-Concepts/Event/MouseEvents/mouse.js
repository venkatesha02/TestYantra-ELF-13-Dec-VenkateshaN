function addStyle() {

    let addEle = document.getElementById('add')
    addEle.className = 'addStyle'

}

function removeStyle() {
    let remEle = document.getElementById('add')
    remEle.className = 'removeStyle'
}

let ele = document.getElementById('one')
ele.onclick = function() {
    alert('You clicked me!!')
}