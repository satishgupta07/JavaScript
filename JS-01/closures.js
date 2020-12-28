function funGen() {
    let x = 1
    function newFun() {
        x++
        console.log(x)
    }
    return newFun
}

let fun = funGen()
let fun1 = funGen()
fun()
fun()
fun1()
fun()
fun()
fun1()

console.log("**********************************************************")

function funGen1() {
    let x = 1
    function newFun1() {
        x++
        function newestFun() {
            x++
            return x
        }
        return newestFun
    }
    return newFun1
}

let fun2 = funGen1()
let fun3 = funGen1()
let fun21 = fun2()
let fun22 = fun2()
let fun31 = fun3()

console.log(fun21())
console.log(fun21())
console.log(fun21())
console.log(fun22())
console.log(fun22())
console.log(fun31())
console.log(fun31())