let formELe1 = `<form>
                    First name:
                    <input type="text" name="firstname">
                    Last name:
                    <input type="text" name="lastname" >
                    <input type="submit" value="Submit">
            </form> `
let divEle1 = document.getElementById("form1")
divEle1.innerHTML = formELe1;



const formELe = document.createElement('form')
const lab1 = document.createElement('label')
lab1.textContent = 'FirstName'
const input1 = document.createElement('input')
const lab2 = document.createElement('label')
lab2.textContent = 'Last Name'
const input2 = document.createElement('input')
const submit = document.createElement('button')
submit.textContent = 'Submit'

formELe.appendChild(lab1)
formELe.appendChild(input1)
formELe.appendChild(lab2)
formELe.appendChild(input2)
formELe.appendChild(submit)


//console.log(ulELe)
document.body.appendChild(formELe)