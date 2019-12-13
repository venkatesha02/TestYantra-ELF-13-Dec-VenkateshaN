//*************Home page************** 

const image = document.createElement("img")

image.src = "images/duke.jpg"
image.style.width = "100%"
document.getElementById("content").appendChild(image)

image.addEventListener("click", function() {

    document.getElementById("content").appendChild(image)
})

//*************Create page***************

const create = document.getElementById("create")

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const form = document.createElement("form")
const h3 = document.createElement("h3")

const input1 = document.createElement("input")
const input2 = document.createElement("input")
const input3 = document.createElement("input")
const checkbox = document.createElement("input")

const label1 = document.createElement("label")
const label2 = document.createElement("label")
const label3 = document.createElement("label")
const button = document.createElement("button")

const p1Tag = document.createElement("p")
const p2Tag = document.createElement("p")
const p3Tag = document.createElement("p")

div1.classList = "col-md-4  mt-3 offset-4 card p-5 mb-5"
div2.classList = "form-group"
div3.classList = "offset-5 mt-3"

form.name = "form"
button.id = "login"
button.type = "submit"
checkbox.type = "checkbox"

input1.classList = "form-control"
input2.classList = "form-control"
input3.classList = "form-control"
button.classList = "btn btn-primary"

h3.textContent = "Create Account"
h3.style.color = 'blue'
label1.textContent = "Name"
label2.textContent = "Mobile"
label3.textContent = "password"
button.textContent = "Submit"


div1.appendChild(form)
form.appendChild(div2)
div2.appendChild(h3)
div2.appendChild(label1)
div2.appendChild(input1)
div2.appendChild(p1Tag)
div2.appendChild(label2)
div2.appendChild(input2)
div2.appendChild(p2Tag)
div2.appendChild(label3)
div2.appendChild(input3)
div2.appendChild(p3Tag)
div2.appendChild(checkbox)
div2.appendChild(div3)
div3.appendChild(button)



create.addEventListener("click", function() {
    document.getElementById("create-li").classList = "active"
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(div1)
})

form.addEventListener("submit", function() {


    let valid = true
    const nameValue = input1.value.trim()
    const mobileValue = input2.value.trim()
    const passwordValue = input3.value.trim()

    const nameLength = nameValue.length
    const mobileLength = mobileValue.length
    const passwordLength = passwordValue.length

    if (nameLength < 1 && mobileLength < 1 && passwordLength < 1) {

        p1Tag.textContent = "Enter Full Name minimum 3 charachter"
        p1Tag.style.display = "block";
        p2Tag.textContent = "Enter Your Mobile"
        p2Tag.style.display = "block";
        p3Tag.textContent = "Enter Your password"
        p3Tag.style.display = "block";

        valid = false

        return false
    }
    if (nameLength < 3) {

        p1Tag.textContent = "Enter name "
        p1Tag.style.display = "block";
        valid = false

    }
    if (mobileLength != 10 || mobileValue.match(/[0-9]/) === null) {

        p2Tag.textContent = "Enter a valid 10 digit mobile"
        p2Tag.style.display = "block";
        valid = false

    }
    if (passwordLength < 1) {


        p3Tag.textContent = "Enter valid password"
        p3Tag.style.display = "block";
        valid = false

        return false

    }
    if (passwordValidation(passwordValue)) {


        p3Tag.textContent = `A minimum 8 characters password contains  
            a combination of uppercase and lowercase letter
            and number are required. 
            `
        p3Tag.style.display = "block";
        valid = false

        return false

    }
    let values = [nameValue, mobileValue, passwordValue]

    if (valid) {
        addStroge(values)
        location.reload();
    }

})
button.addEventListener("click", function() {

    input1.style.border = "1px solid black"
    p1Tag.style.display = "none";
    input2.style.border = "1px solid black"
    p2Tag.style.display = "none";
    input3.style.border = "1px solid black"
    p2Tag.style.display = "none";

})

function passwordValidation(password) {
    let valid = true;
    console.log(password);
    let upperV = password.match(/[A-Z]/)
    let lowerV = password.match(/[a-z]/)
    let numberV = password.match(/[0-9]/)
    let special = password.match(/[!-=]/)
    console.log(special);
    if (numberV !== null && upperV !== null && lowerV !== null && special !== null) {
        valid = false
    }

    return valid
}

function addStroge(values) {

    let i = localStorage.length + 2
    localStorage.setItem(`Values${i}`, values)
}

//creating table
let table = document.createElement("table")
let thead = document.createElement("thead")
let tr = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let tbody = document.createElement("tbody")
let reset = document.createElement("button")


th1.textContent = "Name"
th2.textContent = "Mobile"
th3.textContent = "Password"
reset.textContent = "Clear All"

table.classList = "table container table-bordered table-hover mt-5 mb-5 col-md-8"
thead.classList = "thead-dark"
reset.classList = "btn btn-outline-info col-md-2 offset-5 mb-5"
reset.type = "reset"
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)


function addTable() {

    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")


        if (value !== null && localStorage.key(i).startsWith("account")) {

            let tr1 = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")


            td1.textContent = value[0]
            td2.textContent = value[1]
            td3.textContent = value[2]

            table.appendChild(tbody)
            tbody.appendChild(tr1)
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)


        }

    }

}

//show data
addTable()
show.addEventListener("click", function() {
    document.getElementById("show-li").classList = "active"
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(table)
    document.getElementById("content").appendChild(reset)


})

//show password
checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
        input3.type = "text";
    } else {
        input3.type = "password";
    }
})

//Clear data from localStorage

reset.addEventListener("click", function() {
    localStorage.clear()
    location.reload();
})