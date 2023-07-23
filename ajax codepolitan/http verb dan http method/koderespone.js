// beberapa kode respone pada http 

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

let dataApi=XMLHttpRequest('dataApi.com')
function data(data){
    return new Promise((sukses,failed)=>{
        setTimeout(()=>{
            if(data>200){
                sukses(`api link :${data}, status : sukses`)
            }
            else{
                failed(`api link :${data}, status : failed`)
            }
        },1000)
    })
}

async function f(dataApi){
    return await data(dataApi)
}

f()
.then((sukses)=>{console.log(sukses)})
.catch((failed)=>{console.log(failed)})