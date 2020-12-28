// let id =setInterval(() => {
//     console.log("Hello")
// }, 1000);

// setTimeout(() => {
//     clearInterval(id)
// }, 5000);


setTimeout((id) => {
    clearInterval(id)
},5000, setInterval(()=>console.log("Hello"), 1000));
