document.getElementById("welcome").innerHTML ="Selamat Datang";
document.getElementById("nama").innerHTML ="<b>Faldi</b>";
document.getElementById("email").innerText="rifaldif888@gmail.com";

console.log("Hanya bisa di lihat di console");

// Variabel
let nama = "";
let email = "";
let data = []; // array/larik

// function
function tampil(){
    console.log("Button ditekan");
    // Simpan Value txtnama ke dalam variabel "nama"
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtEmail").value;
    console.log(nama);
    // ubah konten <p id="nama">
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("email").innerHTML = email;
 
    // simpan ke dalam array data
    data.push(nama);
    console.log(data);

}
