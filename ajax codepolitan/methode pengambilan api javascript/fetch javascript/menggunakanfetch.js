// fetch adalah cara untuk request data yang ada pada javascript
// fetch didukung untuk penggunaan promise dan async await

// contoh penggunaan fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch((err)=>console.log(err))


// fetch('https://jsonplaceholder.typicode.com//zzz')
// .then((res)=> res.json())
// .then((stat)=>console.log(stat))
// .catch((err)=>console.log(`this error ${err}`))


// let data=fetch('https://jsonplaceholder.typicode.com/todos/2')
// .then((res)=>res.json())
// .then((stat)=>console.log(stat))
// .catch((err)=>console.log(err))


function data(link){
    let xml=new XMLHttpRequest()
    xml.open('get',link)
    xml.onload=()=>{
        let hasil=JSON.parse(xml.responseText)
    loopData(hasil)
    }
    xml.onreadystatechange=()=>{
        if(this.status==4 || this.onreadystatechange==200){
            console.log('sukses')
        }
        else{
            console.log('failed')
        }
    }
    xml.send()
}


function loopData(data){
console.log(data[2].title)    
}

let test=data('https://jsonplaceholder.typicode.com/todos')  
window.addEventListener('DOMContentLoaded',function(){
    return test
})