function Employee(name, age) {
    this.ename = name
    this.eage = age
    //console.log(this);
    
    walk = function() {
        console.log(this);

        console.log("walk function execute")
    }
    getName = function() {
        //this equal to window object
        console.log("This is window object ", this)

        function greet() {
            //this is window object as it invoked by window object reference
            console.log('This is window object ', this)
        }
        getData = () => {
            //this is the parent context i.e window object
            console.log("this is employee object ", this)
            console.log("getData function ")

        }
        greet()
        getData()

        return this.ename
    }
    walk()
    getName()
}
Employee('mark zukerberg', 35)
console.log("Name is : ", this.ename)
console.log("Age is : ", this.eage)
