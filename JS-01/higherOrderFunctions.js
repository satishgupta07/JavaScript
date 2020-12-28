/* _______________________ Higher-order functions ________________________ */

function outerFun1(fx) {
    console.log("This is outerFun1 " + fx);
}

function innerFun1() {
    console.log("This is innerFun1")
}

outerFun1()

console.log("*********************************************************")

function outerFun2(fx) {
    console.log("This is outerFun2 " + fx);
}

function innerFun2() {
    console.log("This is innerFun2")
}

outerFun2(innerFun2)

console.log("*********************************************************")

function outerFun3(fx) {
    console.log("This is outerFun3 " + fx);
}

function innerFun3() {
    console.log("This is innerFun3")
}

outerFun3(innerFun3())



console.log("*********************************************************")

function f1() {
    function newFun() {
        console.log("Hello World !")
    }
    return newFun
}

let x = f1()
x()