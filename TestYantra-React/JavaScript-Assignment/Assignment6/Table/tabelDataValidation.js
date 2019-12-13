// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


let form = document.createElement('form')
let div = document.getElementById('div')
let table = document.createElement("table")
let thead = document.createElement("thead")
let reset = document.createElement("button")

let tr = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")

th1.textContent = "Name"
th2.textContent = "Age"
th3.textContent = "Email"
th4.textContent = "Mobile"
reset.textContent = "Clear All"


table.classList = 'table table-bordered table-hover table-striped '
thead.classList = 'thead-dark'
reset.classList = 'btn btn-danger col-md-4'
div.classList = 'container-fluid'


form.appendChild(div)
div.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)

addTable()

// Retrieving the values of form elements 
let n = document.contactForm.name
let a = document.contactForm.age
let e = document.contactForm.email
let m = document.contactForm.mobile

// Defining a function to validate form 
function validateForm() {

    let name = n.value;
    let age = a.value;
    let email = e.value;
    let mobile = m.value;
    // Defining error letiables with a default value
    let nameErr = ageErr = emailErr = mobileErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid age");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate age

    if (age === "") {
        console.log(age)
        printError("ageErr", "Please enter your age");
    }
    if ((age > 1 && age < 120)) {
        let regex = /^(([0-9][1-9])|([1-9][0-9])|[1-9])$/;
        if (regex.test(age) === false) {
            printError("ageErr", "Please enter a valid age");
        } else {
            printError("ageErr", "");
            ageErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        let regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || ageErr) == true) {
        return false;
    }

    let values = [name, age, email, mobile]
    addStorage(values)

};


function addTable() {
    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")
       
        if (value !== null && localStorage.key(i).startsWith("value")) {

            let tbody = document.createElement("tbody")
            let tr1 = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")

            td1.textContent = value[0]
            td2.textContent = value[1]
            td3.textContent = value[2]
            td4.textContent = value[3]

            table.classList = 'table'

            table.appendChild(tbody)
            tbody.appendChild(tr1)
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tr1.appendChild(td4)

            document.body.appendChild(table)
            document.body.appendChild(reset)
        }
    }

}

function addStorage(values) {
    let i = localStorage.length + 1
    localStorage.setItem(`values${i}`, values)
}

reset.addEventListener("click", function() {
    localStorage.clear()
    location.reload();
})


function clearData() {
    localStorage.clear();
}