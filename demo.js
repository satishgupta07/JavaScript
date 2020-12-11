/*
   Q1.) Find whether a number is even or odd 
   Q2.) Find if a number is positive, negative or 0
   Q3.) Find if a number is positive and even
*/

document.write("<h1>If-ELse Control Statements </h1>");

var x = 10;

// if(x%2==0) {
//     document.write("<h3>EVEN NUMBER </h3>");
// }
// else {
//     document.write("<h3>ODD NUMBER </h3>");
// }

// if(x>0) {
//     document.write("<h3>POSITIVE NUMBER </h3>");
// }
// else if(x<0) {
//     document.write("<h3>NEGATIVE NUMBER </h3>");
// }
// else {
//     document.write("<h3>ZERO </h3>");
// }

    if(x>0 && x%2==0) {
        document.write("<h3>POSITIVE AND EVEN NUMBER </h3>");
    }
    else if(x<0) {
        document.write("<h3>NEGATIVE NUMBER </h3>");
    }
