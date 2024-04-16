let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnsimpan = document.getElementById("btnsimpan");
let list = document.getElementById("list");

let data = [];
btnsimpan.addEventListener("click", function (){
    if (localStorage.getItem("testimoni")) {
        // ada localstorage dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    } else {
        // belom ada localstorage dengan key testimoni
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    
    }
    // simpan ke dalam localstorage
    localStorage.setItem("testimoni", JSON.stringify(data));
    // panggil getData()
    getData();
});

// tampilkan data localstorage
function getData(){
    // clear element list
    list.innerHTML ="";

    if (localStorage.getItem("testimoni")){
        // ada localstorage dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const [index, row] of data.entries()) {
            list.innerHTML += `<li>${row.nama} ${row.testimoni}</
            li>`;
        }
    }
}