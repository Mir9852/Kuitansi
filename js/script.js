let BtnSubmit = document.getElementById("btnSubmit")

let carts = []

function submitHandler(){
    let id;
    if(carts.length === 0){
        id=1
    } else {
        id = carts[carts.length - 1].id + 1;
    }
    let barangValue = document.getElementById('barang').value;
    let hargaValue = document.getElementById('harga').value;
    let namaValue = document.getElementById('nama').value;

    let tempObj = {
       id,
       nama: barangValue,
       harga: +hargaValue
    }
    document.getElementById('namaCart').innerText = namaValue;
    carts.push(tempObj)
    getCarts()
    // console.log(carts)
}

function getCarts(){

    let tBody = document.getElementById('tBody');
    tBody.innerHTML = ''
    carts.forEach(cart => {
       tBody.innerHTML += `
       <tr>
           <td>${cart.id}</td>
           <td>${cart.nama}</td>
           <td>${cart.harga}</td>
       </tr>`
    })
}

BtnSubmit.addEventListener('click', submitHandler)

const style = document.createElement('style');
style.textContent = `
    @media print {
        .form-box, #btnPrint {
            display: none !important;
            visibility: hidden !important;
        }
    }`;
document.head.appendChild(style);

const BtnPrint = document.querySelector('#btnPrint');

function printHandler(){
    // console.log("Cetak");
    window.print();
}

if(BtnPrint) {BtnPrint.addEventListener('click', printHandler)
}