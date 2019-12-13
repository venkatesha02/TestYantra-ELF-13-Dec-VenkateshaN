localStorage.setItem('role', 'admin')
localStorage.setItem('email', 'abc@gmail.com')
const email = localStorage.getItem('email')
const role = localStorage.getItem('role')

console.log('Email is ', email)
console.log('Role is ', role)




//localStorage.removeItem('role')

//localStorage.clear()

/* function recurtion(a) {
    if (a === 0 || a === 1)
        return 1;
    for (var i = a - 1; i >= 1; i--) {
        a = a * i;
    }
    return a;

}
let b = recurtion(10);
console.log(b) */


/* function recurtion(a) {
    if (a === 0 || a === 1)
        return 1;
    else
        return recurtion(a - 1) * a
}

console.log(recurtion(5)) */