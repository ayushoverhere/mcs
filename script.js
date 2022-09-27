var check = "";
function myfunc(action) {
  if (action == "encrypt") {
    if (check == "rfc") {
      var string = document.getElementById("form23").value;
      var numberRails = document.getElementById("in").value;

      let rails = [];
      for (let i = 0; i < numberRails; i++) {
        rails.push([]);
      }
      let currentRail = 0;
      let goingDown = true;
      for (let i = 0; i < string.length; i++) {
        rails[currentRail].push(string[i]);
        if (currentRail === 0) {
          goingDown = true;
        } else if (currentRail === numberRails - 1) {
          goingDown = false;
        }
        if (goingDown) {
          currentRail++;
        } else {
          currentRail--;
        }
      }
      let result = "";
      for (let i = 0; i < rails.length; i++) {
        result += rails[i].join("");
      }
      let header = document.getElementById("form233");
      header.innerText = result;
    } else if (check == "cc") {
      var plainText = "";
      var encryptedString = document.getElementById("form23").value;
      var unshiftAmount = document.getElementById("in").value;
      for (var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
          plainText += String.fromCharCode(
            ((encryptedCharacter - 97 - unshiftAmount + 26) % 26) + 97
          );
        } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
          plainText += String.fromCharCode(
            ((encryptedCharacter - 65 - unshiftAmount + 26) % 26) + 65
          );
        } else {
          plainText += String.fromCharCode(plainCharacter);
        }
      }
      let header = document.getElementById("form233");
      header.innerText = plainText;
    }
  } else if (action == "decrypt") {
    if (check == "cc") {
      var plainText = "";
      var encryptedString = document.getElementById("form23").value;
      var unshiftAmount = document.getElementById("in").value;
      for (var i = 0; i < encryptedString.length; i++) {
        var encryptedCharacter = encryptedString.charCodeAt(i);
        if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
          plainText += String.fromCharCode(
            ((encryptedCharacter - 97 - unshiftAmount + 26) % 26) + 97
          );
        } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
          plainText += String.fromCharCode(
            ((encryptedCharacter - 65 - unshiftAmount + 26) % 26) + 65
          );
        } else {
          plainText += String.fromCharCode(plainCharacter);
        }
      }
      let header = document.getElementById("form233");
      header.innerText = plainText;
    } else if (check == "rfc") {
  
        var ciphertext = document.getElementById("form23").value;
        var key = document.getElementById("in").value;
        if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
        
        if(key > Math.floor(2*(ciphertext.length-1))){ alert("please enter 1 - 22."); return; }      
        pt = new Array(ciphertext.length);   k=0;
        for(line=0; line<key-1; line++){
           skip=2*(key-line-1);  j=0;
            for(i=line; i<ciphertext.length;){
                pt[i] = ciphertext.charAt(k++);
                if((line==0) || (j%2 == 0)) i+=skip;
               else i+=2*(key-1) - skip;  
               j++;        
            }
        }
        for(i=line; i<ciphertext.length; i+=2*(key-1)) pt[i] = ciphertext.charAt(k++);
        let header = document.getElementById("form233");
        header.innerText = pt.join("");
        
  
    }
  }
} // End of script.js

function checkbox(dope) {
  check = dope;
}

function reset() {
  document.getElementById("form23").value = "";
  document.getElementById("form233").innerText = "";
  document.getElementById("in").value = "";
}

function invalidinput(action) {
  var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/\d/]+/;
  //only number
  var form = /^[0-9]+$/;

  if (
    format.test(document.getElementById("form23").value) ||
    !form.test(document.getElementById("in").value)
  ) {
    let header = document.getElementById("form233");
    header.innerText = "Invalid Input";
  } else {
    myfunc(action);
  }
}
