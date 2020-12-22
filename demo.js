//   Regular Expressions are used to perform powerful pattern-matching and 
//   search-and-replace functions on text.

  function validate() {
      var username = document.getElementById("uname").value;
      var regx = /E00/i;
      if(regx.test(username)) {
          alert("Valid Username");
      }
      else {
          alert("Invalid Username");
          document.getElementById('lbluser').style.visibility="visible";
      }
  }

   