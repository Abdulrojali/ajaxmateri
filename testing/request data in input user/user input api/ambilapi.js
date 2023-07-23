function getApi(url){
let data=new XMLHttpRequest()
data.open('get',url)
data.onload=()=>{
    let hasil=JSON.parse(data.responseText)
    getTeks(JSON.stringify(hasil))
}
data.onerror=()=>{
    alert('this error please reload')
}
data.onreadystatechange=()=>{
    if(this.status==4 || this.readystate==200){
        console.log('sukses')
    }
    else{
        console.log('failed')
    }
}
data.send()
}
window.addEventListener('DOMContentLoaded',function(){
    getApi('https://dummyjson.com/products')
})



function getTeks(teks){
    let p=document.createElement('p')
    let paragraf=`${teks}`
    p.innerHTML=paragraf
    document.querySelector('.container').appendChild(p)
}
