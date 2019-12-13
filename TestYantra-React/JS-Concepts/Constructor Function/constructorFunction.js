//Constructor Function

function Employee(name, age) {
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
console.log("Name is ", name)