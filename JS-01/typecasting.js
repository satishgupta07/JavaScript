console.log([] == '')
console.log([] == 0)
console.log(1 == '1')

console.log(1 === '1')

console.log(+[])
console.log(+'1')
console.log(+'adsad')    //NaN

console.log(Number('1'))
console.log(parseInt(1.11))
console.log(parseFloat(12.21324224191856153265013))

console.log(Infinity+Infinity)    //Infinity
console.log(Infinity+(-Infinity))  //NaN

let arr = [1,2,3]
console.log([1,2,3] == arr)    // false

// shallow copy
let b = arr
console.log(b == arr)    // true
b[0] = 10
console.log(arr)


// deep copy
let arr1 = [5,6,7]
let arr2 = []
for(let i=0; i<arr1.length; i++) {
    arr2.push(arr1[i])
}
arr2[0] = 9
console.log(arr1)
console.log(arr2)


console.log(+[[],[]])  //NaN

let ar = [10,20,30]
console.log(ar)
ar.push(100)
console.log(ar)
ar.pop()
console.log(ar)
ar.unshift(2,5)
console.log(ar)
ar.shift()
console.log(ar)


/* ________________________________ Circular Referencing _________________________________ */

obj = {
    a : "Hello"
}
obj.o = obj

console.log(obj)
console.log(obj.o.o.o.o.o)
