let a = ()=>{
    console.log("Hello")
}

a()

let obj = {
    a: true,
    b: ()=>{
        console.log("Hey!")
    }
}

obj.b()

let fun = (langauge)=>{
    console.log(`Learning ${langauge} is Fun`)
}

fun('Java')

let sqrt = (i)=> Math.sqrt(i)

console.log(sqrt(25))

let arr = [5,4,6,7,8,1,2,3,0,-1,11,1231,121,124] 
arr.sort((a,b)=>a-b)
console.log(arr)


arr1 = [1,2,3,4,5]
let ans = arr1.reduce((accum,val,indx,arr)=>{
    console.log(arr1,indx)
    return accum+val
})
console.log(ans)

let arr2 = [2,3,4,5,6,7,8,9]
arr2 = arr2.filter((i)=>i%2==0)
console.log(arr2)

let arr3 = [3,4,7,8,9]
arr3 = arr3.map((i)=>i*i*i)
console.log(arr3)