//   Regular Expressions are used to perform powerful pattern-matching and 
//   search-and-replace functions on text.
/*
    \d - match any digit (equal to [0-9])
    \w - match any word character (a-z,A-Z,0-9 &...)
    \s - match whitespace charcter (eg - spaces & tabs)
    \t - match a tab only
*/

  function validate() {
      var text = document.getElementById("text1").value;
      var regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
      if(regx.test(text)) {
          document.getElementById('lbltext').innerHTML="Valid";
          document.getElementById('lbltext').style.visibility="visible";
          document.getElementById('lbltext').style.color="green";
      }
      else {
        document.getElementById('lbltext').innerHTML="Invalid";
        document.getElementById('lbltext').style.visibility="visible";
        document.getElementById('lbltext').style.color="red";
      } 
  }

   