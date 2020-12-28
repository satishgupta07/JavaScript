// let s = (function(name){
//     var x = 10, b=true;
//     console.log("Hello",name)
//     return b;
// })("Satish Gupta")

// // console.log(x)
// console.log(s)

// var a = "Hello"

// !function(name){
//     console.log("Hello",name)
// }("Satish Gupta")

// console.log(a)

(function fun(a,b,cl,ms,mp){
    cl("Multiply : ",a*b)
    cl("Square root of a : ",ms(a))
    cl("Square root of a : ",ms(b))
    cl("Power a to b : ",mp(a,b))
})(2,3,console.log,Math.sqrt,Math.pow)