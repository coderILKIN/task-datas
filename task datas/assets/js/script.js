fetch("https://jsonplaceholder.typicode.com/photos")

.then((resp) => resp.json())
.then((datas)=>{

let container =document.createElement("div");
container.className ="container";
document.body.appendChild(container);

let row =document.createElement("div");
row.className ="row";

container.appendChild(row);


for (let i = 0; i <datas.length-4900; i++) {

    let card =document.createElement("div");
        card.className ="card mt-5";

        card.style.width ="17rem";

        let img =document.createElement("img");
        img.className ="card-img-top";

        let card_body =document.createElement("div");
        card_body.className ="card-body";

        let card_title =document.createElement("h5");
        card_title.className ="card-title";

        let card_text =document.createElement("p");
        card_text.className ="card-text";

        let btn =document.createElement("a");
        btn.className ="btn btn-primary";
    
        row.appendChild(card);

        card.appendChild(img);

        card.appendChild(card_body);

        card_body.appendChild(card_title);

        card_body.appendChild(card_text);

        card_body.appendChild(btn);
    
        img.src= datas[i].url;

    card_title.innerText=datas[i].title;

    btn.href= "./links.html";

    btn.innerText ="Click About";

    btn.addEventListener("click",function(){
        
        localStorage.setItem("albumIdvalue",datas[i].albumId)

        localStorage.setItem("idvalue",datas[i].id)

        localStorage.setItem("titlevalue",datas[i].title)

        localStorage.setItem("urlvalue",datas[i].url)
        
        localStorage.setItem("thumbnailUrlvalue",datas[i].thumbnailUrl)

        return false;
    })
    
}
});

