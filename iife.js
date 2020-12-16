/* IIFE - Immediately Invoked Function Expression */

(function () {
    console.log("hello");
})();


(function () {
    var a = 10;      //block scope
    var b = a/5;
    console.log(a+b);
})();


(function (l,p,r,s) {
    l("3^4 = " + p(3,4));
    l("4^3 = " + p(4,3));
    l("root(2) = " + r(2));
    l("sin(10) " + s(10));
})(console.log, Math.pow, Math.sqrt, Math.sin);

console.log("***************************************************");

for(var i=0; i<10; i++) {
    setTimeout(function() {
        console.log(i);
    },1000)
}

for(var i=0; i<10; i++) {
    (function (j) {
        setTimeout(function() {
            console.log(j);
        },1000)
    })(i)
}

for(let i=0; i<10; i++) {
    setTimeout(function() {
        console.log(i);
    },1000)
}

for(var i=0; i<10; i++) {
    setTimeout(console.log, 1000, i) 
}


