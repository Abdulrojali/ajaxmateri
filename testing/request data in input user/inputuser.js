let inputuser=document.querySelector('.user').value
let button=document.querySelector('search')


button.addEventListener('click',function(){
    fetchApi('https://jsonplaceholder.typicode.com/todos/'+inputuser)
})
function fetchApi(url){
    fetch(url)
    .then(Response=>JSON.parse(Response))
    .then(data=>getList(data))
}


function getList(dataLi){
    let li=document.createElement('li')
    let teks=`${dataLi}`
    li.innerHTML=teks
    document.querySelector('div .listinputan ul').appendChild(li)
}