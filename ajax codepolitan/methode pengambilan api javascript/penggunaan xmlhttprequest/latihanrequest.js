let inputLink=document.querySelector('.link')
let button=document.querySelector('.click')
let tampil=document.querySelector('.tampil')



button.addEventListener('click',function(){
    // ambil data dari inputan user
    let url=inputLink.value
    // buat object ajax
    const req=new XMLHttpRequest()
    // open data ajax 
    req.open('GET',url)

    // send request data ke server menggunakan api link
    req.send()
    // proses data dari json ke object javascritpt
    req.onload=()=>{
        let data=JSON.parse(req.response)
        console.log(data)
        tampil.innerHTML=data
    }
    console.log(req)
})


