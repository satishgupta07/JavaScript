class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.isAdult = function() {
            return age>18
        }
    }
    get firstName() {                         //getter
        return this.name.split(' ')[0]
    }
    set lastName(newLastName) {                        //setter
        this.name = this.name.split(' ')
        this.name.pop()
        this.name.push(newLastName)
        this.name = this.name.join(' ')
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age)
        this.marks = marks
    }
}

let p = new Person("Satish Kumar",21)
let p1 = new Person("Rahul Gupta", 17)

console.log(p.name)
console.log(p.age)
console.log(p1.name)
console.log(p1.age)
console.log(p.firstName)

p.lastName = "Gupta"
console.log(p.name)

let s = new Student("Amrit Jain", 25, 80);
console.log(s)