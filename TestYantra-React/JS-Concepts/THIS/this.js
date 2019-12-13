// global this
/* console.log("this is window object ", this)

console.log('------------------------------')

//arrow function
display = () => {
    //this is parent context i.e window object
    console.log("This is window object ", this)
}
console.log('------------------------------')

//Named Function()
function show() {
    //this is window object as it isinvoked by window object
    console.log("this is window object ", this)
}
display()
show()

console.log('------------------------------')
 */
//Constructor Function

/* function Employee(name, age) {
    this.ename = name
    this.eage = age
    this.walk = function() {
        console.log("walk function execute")
    }
    this.getName = function() {
        //this equal to employee object
        console.log("This is Employee object ", this)

        function greet() {
            //this is window object as it invoked by window object reference
            console.log('This is window object ', this)
        }
        getData = () => {
            //this is the parent context i.e employee object
            console.log("this is employee object ", this)
            console.log("getData function ")

        }
        greet()
        getData()

        return this.ename
    }
}
const mark = new Employee('mark zukerberg', 35)
console.log("Name is : ", mark.ename)
console.log("Age is : ", mark.eage)
let name = mark.getName()
mark.walk()
console.log("Name is ", name) */

console.log('------------------------------')

/* function Employee(name, age) {
    this.ename = name
    this.eage = age
    this.walk = function() {
        console.log("walk function execute")
        return this.ename
    }

}
const mark1 = Employee('venki', 23)
console.log("Name is : ", this.ename)
console.log("Age is : ", this.eage)
this.walk();
 */
console.log('------------------------------')

const person = {
    firstName: 'katrina',
    lastName: 'kaif',
    color: 'white',
    getFullName: function() {
        //this person object as it is invoked by person
        //object refernce
        console.log('this is person object', this)

    },
    getColor: function() {
        console.log('this is person object ', this)
        getData = () => {
            //this is the perant context i.e person object
            console.log("this is person object", this)
            getD =()=>{
                console.log("current  venki object ",this);
                getA = ()=>{
                    console.log("shibhu ",this);
                    
                }
                getA()
                
            }
            getD()

        }

        function showData() {
            //this is window object as it is invoked
            //by window reference
            console.log('this is window object', this)
        }
        getData()
        showData()
    }
}
person.getFullName()
person.getColor()