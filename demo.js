var a= 5;  // global variable

function myfun() {
    var b = 7;  //local variable
    document.write("<h2>"+a+"</h2>");
    document.write("<h2>"+b+"</h2>");
}

myfun();

document.write("<h2>"+a+"</h2>");
document.write("<h2>"+b+"</h2>");

