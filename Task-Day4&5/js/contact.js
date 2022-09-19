 // alert("hello World")

// Type Data
// let nama = "Brian";
// let umur = 12;

// nama saya brian umur saya 12 tahun
// console.log(`nama saya ${nama} umur saya ${umur} tahun`); // Cara 1
// console.log("nama saya", nama, "umur saya", umur, "tahun"); // Cara 2
// console.log("nama saya " + nama + " umur saya " + umur + " tahun "); // Cara 3

// Operator

// let bilanganSatu = 50;
// let bilanganDua = 20;

// let result = bilanganSatu + bilanganDua; // Fungsi + digunakan untuk penggabungan dan penjumlahan. Sesuai kondisinya

// console.log(result);

// Taking Decision
// let nilai = 80;

// if(nilai == 75) {
//     console.log("lulus");
// } else {
//     console.log("tidak lulus");
// }

// Function
// function Hallo() {
//     let bilanganSatu = 50;
//     let bilanganDua = 20;

//     let result = bilanganSatu + bilanganDua

//     console.log(result);
// }

// Hallo()

// function Hallo(bilanganSatu, bilanganDua) {

//     let result = bilanganSatu + bilanganDua

//     console.log(result);
// }

// Hallo(50, 20)

// Membuat Function dengan nama namaSaya, dengan parameter name
// function namaSaya(name) {
//     console.log(name);

// }

// namaSaya("samsul")

function submitData() {
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if(name == "") {
        return alert("Name is required")
    } else if(email == "") {
        return alert("Email is required")
    } else if(phone == "") {
        return alert("Phone Number is required")
    } else if(subject == "") {
        return alert("Subject is required")
    } else if(message == "") {
        return alert("Your Message is required")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    
    let emailReceiver = "brilliantkid87@gmail.com"
    
    let a = document.createElement('a')
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=hallo nama saya ${name} ${message} silahkan hubungi ${phone}`

    a.click()

}
