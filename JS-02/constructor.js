function Person(name, age) {
    this.name = name
    this.isAdult = function() {
        return age>18
    }
}

Person.sayHello = function() {
    console.log("Hello")
}

let p = new Person("Satish",20)
console.log(new Person().__proto__ == Person.prototype)

console.log(p.name)
console.log(p.age)
console.log(p.isAdult())

let p1 = new Person("Rahul", 17)
console.log(p1.name)
console.log(p1.age)
console.log(p1.isAdult())

Person.sayHello()