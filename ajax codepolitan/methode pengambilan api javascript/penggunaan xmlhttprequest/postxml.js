
let url=new XMLHttpRequest()

url.open('POST','')

url.onload=()=>{
    let convert=JSON.parse(url.response)
    console.log(convert)
}

url.onreadystatechange=()=>{
    if(url.status==4&& url.onreadystatechange==200){
        console.log(`url ${url}`)
        console.log('status: sukses')
    }
    else{
        console.log(`url ${url}`)
        console.log('status: failed')
    }
}

url.send()