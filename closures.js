
function count() {
    var initial = 1;
    function plus() {
        console.log(++initial);
    }
    return plus;
}

var c = count();
c();
c();
c();

console.log("---------------------------------------------------");

function counter(val) {
    function plus() {
        console.log(++val);
    }
    return plus;
}

var f = counter(10)
f();
f();

console.log("---------------------------------------------------");

function createCounter(initVal, deltaVal) {
    return {
        up() {
            initVal += deltaVal;
            console.log(initVal);
        },
        down() {
            initVal -= deltaVal;
            console.log(initVal);
        }
    }
}

var fun = createCounter(10,2);
fun.up();
fun.up();
fun.down();