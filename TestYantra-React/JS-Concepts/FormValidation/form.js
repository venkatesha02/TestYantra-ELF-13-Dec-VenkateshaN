const loginButton = document.getElementById('login')
loginButton.addEventListener('click', function() {
    const userForm = document.forms['userForm']

    const userNameElement = userForm.username
    const passwordElement = userForm.password

    const userName = userNameElement.value
    const password = passwordElement.value

    console.log('Username is ', userName)
    console.log('Password is ', password)

    if (userName.trim().length > 6) {
        console.log("User Name is valid")
    } else {
        console.log("User Name is Invalid")
    }
    if (password.trim().length > 5) {
        console.log("Password is valid")
    } else {
        console.log("Passwor is Invalid")
    }
})