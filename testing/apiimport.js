function getTeks(judul,teks){
    let p=`<h3> ${judul}</h3>
    <p> ${teks}</p>`
    document.querySelector('.container').innerHTML=p
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())
.then((data)=>getTeks(data.title,data.albumId))

