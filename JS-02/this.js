function fun() {
    console.log("Inside fun ",this)
}

let a = {
    k: 1,
    l: true,
    m: 'String',
    n: function() {
        return this
    }
}

let b = {
    k : 10,
    l : true
}

console.log(a.n())

fun.call(b)   // Explicit Binding

let funbind = fun.bind(a)
funbind()

