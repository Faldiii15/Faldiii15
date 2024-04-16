 let angka1 = document.getElementByI(" Angka 1 ")
 let angka2 = document.getElementByI(" Angka 2 ")
 let hasil = document.getElementByI(" Hasil ")


 function hitungh(Operator){
    if (operator == "tambah") {  
        hasil.innerHTMl = Number(angka1.value) + Number(angka2.value);
    } else if