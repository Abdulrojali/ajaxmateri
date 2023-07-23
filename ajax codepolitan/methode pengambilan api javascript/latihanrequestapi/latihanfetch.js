let inputUser=document.querySelector('.link')
let button=document.querySelector('.click')


button.addEventListener('click',function(){
    let hasil=inputUser.value
    data(hasil)
})

function data(hasil){
    fetch(hasil)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}



// let data=fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>res.json())
// .then((data)=>console.log(data))


