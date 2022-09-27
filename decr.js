

function Decrypt(f) {
    ciphertext = "aehtkvwetceyrare";
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    var key = 4;
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
    return pt.join("");
    
}


console.log(Decrypt());
