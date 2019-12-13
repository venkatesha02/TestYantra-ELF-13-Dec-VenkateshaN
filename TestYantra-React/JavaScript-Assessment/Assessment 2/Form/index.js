// home page courosul
const image = document.createElement("img")

image.src = "images/duke.jpg"
image.style.width = "100%"
document.getElementById("content").appendChild(image)

image.addEventListener("click", function() {

    document.getElementById("content").appendChild(image)
})

// creating table 

const create = document.getElementById("create")

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const form = document.createElement("form")
const h3 = document.createElement("h3")

const input1 = document.createElement("input")
const input2 = document.createElement("input")
const input3 = document.createElement("input")
const input4 = document.createElement("input")

const label1 = document.createElement("label")
const label2 = document.createElement("label")
const label3 = document.createElement("label")
const label4 = document.createElement("label")

const button = document.createElement("button")

const p1Tag = document.createElement("p")
const p2Tag = document.createElement("p")
const p3Tag = document.createElement("p")
const p4Tag = document.createElement('p')

div1.classList = "col-md-4  mt-3 offset-4 card p-5 mb-5"
div2.classList = "form-group"
div3.classList = "offset-5 mt-3"

form.name = "form"
button.id = "login"
button.type = "submit"
    //checkbox.type = "checkbox"
    //input2.maxLength = 10

input1.classList = "form-control"
input2.classList = "form-control"
input3.classList = "form-control"
input4.classList = "form-control"
button.classList = "btn btn-primary"

h3.textContent = "Create Account"
h3.style.color = 'blue'
label1.textContent = "User Name"
label2.textContent = "Email Id"
label3.textContent = "password"
label4.textContent = "Confirm Password"
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
div2.appendChild(label4)
div2.appendChild(input4)
div2.appendChild(p4Tag)
div2.appendChild(div3)
div3.appendChild(button)


create.addEventListener("click", function() {
    document.getElementById("create-li")
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(div1)
})


const login = document.getElementById("login")
const div11 = document.createElement("div")
const div22 = document.createElement("div")
const div33 = document.createElement("div")
const form1 = document.createElement("form")
const h33 = document.createElement("h3")

const input11 = document.createElement("input")
const input22 = document.createElement("input")


const label11 = document.createElement("label")
const label22 = document.createElement("label")


const button1 = document.createElement("button")

const p1Tag1 = document.createElement("p")
const p2Tag2 = document.createElement("p")

div11.classList = "col-md-4  mt-3 offset-4 card p-5 mb-5"
div22.classList = "form-group"
div33.classList = "offset-2 mt-3"

form1.name = "form1"
button1.id = "login"
button1.type = "submit"

input11.classList = "form-control"
input22.classList = "form-control"

button1.classList = "btn btn-primary"

h33.textContent = "Login Page"
h33.style.color = 'blue'
label11.textContent = "User Name"
label22.textContent = "Password"

button1.textContent = "Login"

div11.appendChild(form1)
form1.appendChild(div22)
div22.appendChild(h33)
div22.appendChild(label11)
div22.appendChild(input11)
div22.appendChild(p1Tag1)
div22.appendChild(label22)
div22.appendChild(input22)
div22.appendChild(p2Tag2)

div33.appendChild(button1)

login.addEventListener("click", function() {
    document.getElementById("login-li")
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(div11)
})


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
let th4 = document.createElement("th")



let tbody = document.createElement("tbody")
let reset = document.createElement("button")


th1.textContent = "Name"
th2.textContent = "Email"
th3.textContent = "Password"
th4.textContent = 'Action'
reset.textContent = "Clear All"

table.classList = "table container table-bordered table-hover mt-5 mb-5 col-md-8"
thead.classList = "thead-light"
reset.classList = "btn btn-danger col-md-2 offset-5 mb-5"
reset.type = "reset"
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)


function addTable() {

    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")

        if (value !== null && localStorage.key(i)) {

            let tr1 = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")
            let tdbut = document.createElement('button')

            tdbut.textContent = 'Delete'
            td1.textContent = value[0]
            td2.textContent = value[1]
            td3.textContent = value[2]

            table.appendChild(tbody)
            tbody.appendChild(tr1)
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tr1.appendChild(td4)
            td3.appendChild(tbbut)

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


//Clear data from localStorage
reset.addEventListener("click", function() {
    localStorage.clear()
    location.reload();
})