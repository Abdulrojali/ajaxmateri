// ajax (asynchronous javascript dan xml) adalah sebuah request data tanpa melakukan reload halaman
// web api API adalah singkatan dari Application Programming Interface, yaitu sebuah software yang memungkinkan para developer untuk mengintegrasikan dan mengizinkan dua aplikasi yang berbeda secara bersamaan untuk saling terhubung satu sama lain.
// json (javascript object notation)adalah format file berbasis teks yang umumnya digunakan dalam proses pertukaran data antara server dan klien.

// beberapa methode json
// 1. JSON.stringify() untuk mengubah object javascript menjadi object json
//contoh
let identitas={
    nama:'abdul',
    alamat:'sukabumi',
    usia:'19'
}
console.log('bentuk object javascript :', identitas)
// convert object javascript kedalam object json
let uid=JSON.stringify(identitas)
console.log('di ubah dalam bentuk object json :',uid)

// 2. JSON.parse() untuk mengubah object json menjadi object javascript
// contoh
 let ubahKeObjectJavascript=JSON.parse(uid)
 console.log('mengubah kembali kedalam bentuk object javascript :', ubahKeObjectJavascript)




 // kesimpulan
// ajax request data ke api dan api akan melakukan request ke json respon tersebut di kembalikan kepada api lalu ajax
// js dom digunakan untuk menampilkan request yang di terima ajax

