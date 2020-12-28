// Call By Value
function fun(a) {
    a = a+10
    console.log("In function "+a)
}

let a = 1
console.log(a)
fun(a)
console.log(a)


// Call By Reference
function fun1(a) {
    a[0] = a[0] + 10
    console.log("In function " +a)
}

let arr = [1,2,3]
console.log(arr)
fun1(arr)
console.log(arr)