//cara mengambil api menggunakan xml

// 1. membuat object ajax
let req=new XMLHttpRequest()
// 2. proses request data dengan parameter get dan url di server
req.open('GET','https://alpha-vantage.p.rapidapi.com/query')

// proses data saat load
req.onload=()=>{
    let data=JSON.parse(req.response)
    console.log(data)
}

// proses yang di lakukan apabila data error
req.onerror=()=>{
    if(req.status=0 && req.onreadystatechange==404){
        console.log(`error`)
    }
}

// 3. proses pengiriman data ke server api
req.send()

console.log(req)
