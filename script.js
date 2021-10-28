// fetch(`https://api.thecatapi.com/v1/images/search`).then(resposta=>{
//     return resposta.json()
// }).then(corpo=>{
//     // @ts-ignore
//     document.getElementById("span").innerHTML=corpo.categorias
// });


let generate_btn =document.querySelector(".generate_btn");

// @ts-ignore
generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data)=>{
        let catsImgUrl = data[0].url

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src', `${catsImgUrl}`)
        catsImgEl.classList.add("showcase")

        let catsImgDiv = document.querySelector(".catsImgDiv")
        catsImgDiv?.appendChild(catsImgEl)
    })
    .catch(err=>console.log(err))
}
    
