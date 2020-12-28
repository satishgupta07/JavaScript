fun()

function fun() {
    console.log("Hello")
}

fun()
// fun1()

var fun1 = function() {
    console.log("World")
}

fun1()

// Hoisting

var x = 10
function fun2() {
    console.log(x)  // undefined
    var x = 100
    console.log(x)  //100
}

fun2()

var x = 50
function fun3() {
    console.log(x)  // 50
    x = 200
    console.log(x)   //200
}

fun3()
