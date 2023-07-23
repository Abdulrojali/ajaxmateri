// cara menggunakan axios
// 1. install axios  (npm install axios)
// 2. menggunakan link cdn js delevery
//{ <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}

// const { default: axios } = require("axios")

// 3. menggunakan link cds unpkg
//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// note axios tidak support di microsoft explorer

// cara penggunaan axios
// axios(url)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))



// // menggunakan axios dengan input user
// let input=document.querySelector('.inputTeks')
// let button=document.querySelector('.click')

// button.addEventListener('click',function(){
//     let data=input.value
//     getData(data)
// })
// function getData(api){
//     axios.get(api)
//     .then((respon)=>console.log(respon))
//     .catch((err)=>console.log(err))
// }

// 'https://jsonplaceholder.typicode.com/todos/1'



// contoh lain
// async function getNumber(angka){
//     try{
//         const result= await axios.get(`https://jsonplaceholder.typicode.com/todos/${angka}`)
//         console.log(result.data)
//     }catch(error){
//         console.log(error)
//         console.log(error.massage)
//         console.log(error.response.status)
//         console.log(error.response.data)
//     }
// }


//contoh lain

let data=document.querySelector('.inputTeks')
let button=document.querySelector('.click')

button.addEventListener('click',function(){
    let result=data.value
    getNumber(result)
})
async function getNumber(angka){
    try{
        const result= await axios.get(`https://jsonplaceholder.typicode.com/todos/${angka}`)
        console.log(result.data)
    }catch(error){
        console.log(error)
        console.log(error.massage)
        console.log(error.response.status)
        console.log(error.response.data)
    }
}