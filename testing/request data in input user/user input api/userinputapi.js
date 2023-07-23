let userInput=document.querySelector('.searching')
let button=document.querySelector('.search')

button.addEventListener('click',function(){
    getData(userInput.value)
})
function getData(url){
    let data=new XMLHttpRequest()
    data.open('get','https://jsonplaceholder.typicode.com/todos/'+url)
    data.onload=()=>{
        let hasil=JSON.parse(data.responseText)
        console.log(hasil)
        getTeks(hasil.id,hasil.title)
    }
    data.onerror=()=>{
        console.log('erorr')
    }
    data.send()
}

function getTeks(judul,paragraf){
console.log(judul,paragraf)
}