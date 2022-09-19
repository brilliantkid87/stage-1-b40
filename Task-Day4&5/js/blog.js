// Array 
// let nama = ["lauren", "brian", "gantari"];

// console.log(nama);
// console.log(nama[1]);

// Object
// let nama = "bagus";
// let alamat = "madiun";
// let umur = 20;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// let dataPersonal = {
//     nama: "bagus",
//     alamat: "madiun",
//     umur: 20,
// }

// let dataPersonal2 = {
//     nama: "rijal",
//     alamat: "madiun",
//     umur: 20,
// }

// console.log(dataPersonal);
// console.log(dataPersonal2);

// Array Object
// let dataPersonal = [
//     {
//         nama: "brian",
//         alamat: {
//             kota: "Jakarta",
//             provinsi: "DKI"
//         },
//         hobi: ["tidur", "makan"]
//     },
//     {
//         nama: "gantari",
//         alamat: "madiun",
//     },
//     {
//         nama: "lauren",
//         alamat: "madiun",
//     },
// ]

// console.log(dataPersonal);
// console.log(dataPersonal[2].alamat);

let dataBlog = []

function addBlog(event) {

    event.preventDefault()

    let title = document.getElementById("input-projectname").value
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-blog-image").files
    console.log(image);

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        description,
        image
    }
    
    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog()

}

// function renderBlog() {
//     // perulangan

//     document.getElementById("contents").innerHTML = ""

//     for (let index = 0; index < dataBlog.length; index++) {
//         console.log(dataBlog[index]);        

//         document.getElementById("contents").innerHTML += `
//             <div class="blog-list-item">
//                 <div class="blog-image">
//                 <img src="${dataBlog[index].image}" alt="" />
//                 </div>
//                 <div class="blog-content">
//                 <div class="btn-group">
//                     <button class="btn-edit">Edit Post</button>
//                     <button class="btn-post">Post Blog</button>
//                 </div>
//                 </div>

//                 <h1>
//                     <a href="blog-detail.html" target="_blank"
//                     >${dataBlog[index].title}</a>
//                  </h1>
//                 <div   class="detail-blog-content">
//                 12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
//                 </div>
//                 <p>
//                     ${dataBlog[index].description}
//                 </p>
//             </div>
//         `

//     }
// }

function renderBlog() {
    // perulangan

    document.getElementById("contents").innerHTML = ""

    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index]);        

        document.getElementById("contents").innerHTML += `

            <div    class="blog-list-content">
            <img src="${dataBlog[index].image}" alt="">
            <h3>${dataBlog[index].title}</h3>
            <p>${dataBlog[index].description}</p>
            </div>
        `

    }
}
