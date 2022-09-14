// FUNCTION
// function Hello() {
//     let ageAndi = 21;
//     let ageBrian = 22;

//     let result = ageAndi + ageBrian;
//     console.log(result);
// }

// Hello()

// function Hello(ageAndi, ageBrian) {
//     let result = ageAndi +ageBrian;

//     console.log(result);
// }

// Hello(30, 90)

// membuat parameter dengan nama namaSaya, dengan parameter name

// function namaSaya(name) {
//     console.log(name);
// }
// namaSaya("brian")

function submitData() {
    let name = document.getElementById("input-name").value;    
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let skill = document.getElementById("input-skill").value;
    let message = document.getElementById("input-message").value;

    // if(name == "" || email == "" || phone == "" || skill == "" || message == "") {
    //     return alert("semua filed harus diisi")
    // }

    if(name == "") {
       return alert("name harus diisi")
    } else if(email == "") {
       return alert("email harus diisi")
    } else if(phone == "") {
       return alert("phone harus diisi")
    } else if(skill == "") {
       return alert("skill harus diisi")
    } else if(message == "") {
       return alert("message harus diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(skill);
    console.log(message);

    // <a href="mailto:someone@example.com">Send email</a>

    let emailReceiver = "brilliantkid87@gmail.com";

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${skill}&body=${message}, silahkan kontak ke ${phone}`
    a.click()
}
