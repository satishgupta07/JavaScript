// function sayHello() {
//     console.log("Hello !")
// }

// console.log("And the wait starts ....");
// setTimeout(sayHello, 1000);
// setTimeout(sayHello, 2000);

var intervalId;
var runCount = 0;
function sayHi() {
    runCount++;
    if(runCount > 5) {
        clearInterval(intervalId)
    }
    console.log("Hey! Everyone")
}

console.log("Again the wait starts ....");
intervalId = setInterval(sayHi, 1000);
