//   getElementsByTagName method

function changeStyling() {
    var para = document.getElementsByTagName("p");
    para[0].style.color = "blue";
    para[1].style.color = "red";
    para[2].style.fontWeight = "bold";
    para[3].style.fontStyle = "italic";
    para[4].style.color = "green";

    for(var i=0; i<para.length; i++) {
        para[i].style.fontSize = "25px";
    }
}
   