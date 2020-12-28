let p = new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Resolve function running")
        resolve()
    },3000)
})

console.log("Calling .then on promise p")
p.then(function() {
    console.log("Hello World!")
})