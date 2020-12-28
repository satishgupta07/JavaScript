console.log(new Date().getTime())    //milliseconds since January,1997

function waitASec() {
    let x = new Date().getTime()
    while(new Date().getTime() < x+1000) {

    }
}

function waitNSec(N, fun) {
    for(let i=0; i<N ; i++) {
        waitASec()
    }
}

function fun() {
    console.log("Function is running")
}

waitNSec(4,fun)

console.log("Some other tasks")
console.log("Some more tasks")


console.log("************************** Async Function *******************************")

function fun1() {
    console.log("Funtion 1 is running...")
}

setTimeout(fun1, 5000)
setTimeout(function() {
    console.log("Another function running...")
},4000)

console.log("Some other tasks.....")
console.log("Some more tasks.....")