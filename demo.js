// Associativity
var a = 3; // right-to-left
var b = 5;
var c = 7;
var result = a+c+"Satish"+a+b;  // left to right

// Operator Precedence
var result2 = c+b*a;

document.write("<h1>Result is : "+result+"</h1>");
document.write("<h1>Result is : "+result2+"</h1>");