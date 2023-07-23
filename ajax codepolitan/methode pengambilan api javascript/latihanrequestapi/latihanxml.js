// let dataInput=document.querySelector('.link')
// let button=document.querySelector('.click')


// button.addEventListener('click',function(){
//     let result=dataInput.value
//     getApi(result)
// })


// function getApi(api){
//     let data=new XMLHttpRequest()
//     data.open('GET',api,true)
//     data.send()

//     data.onreadystatechange=()=>{
//         if(data.readyState==4 && data.status==200){
//             console.log(`data : sukses`)
//         }
//         else{
//             console.log(`data : failed`)
//         }
//     }
//     data.onload=()=>{
//         let hasil=JSON.parse(data.response)
//         console.log(hasil)
//     }

//     data.onerror=()=>{
//        console.log(`data error`)
//     }
// }


