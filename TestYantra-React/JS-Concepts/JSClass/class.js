/* class Person {
    constructor(fname, lname, age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    getFullName() {
        return this.fname + ' ' + this.lname
    }
}
const person = new Person('Nazriya', 'Nazim', 26)
console.log("First Name is ", person.fname)
console.log("Last Name is ", person.lname)
console.log("Age is ", person.age)

console.log('------------------------------------')

const fullName = person.getFullName()
console.log("Full Name is ", fullName)

class Teacher extends Person {
    constructor(fname, lname, age, subjects) {
        super(fname, lname, age)
        this.subjects = subjects
    }
    getSubject() {
        return this.subjects
    }
    static teachingStyle() {
        return 'Boring teaching'
    }
}

const teacher = new Teacher('Rajeshwari', 'wari', 26, ['science', 'maths', 'social'])
const teacherFullName = teacher.getFullName();
const subject = teacher.getSubject();

console.log('------------------------------------')
console.log("First Name is ", teacher.fname)
console.log("Last Name is ", teacher.lname)
console.log("Age is ", teacher.age)
console.log('full Name is ', teacherFullName)
console.log('Subjects are ', subject)
console.log('Teaching Style ', Teacher.teachingStyle()); */


class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }

}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!