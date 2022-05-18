let albums =localStorage.getItem("albumIdvalue");
let ids =localStorage.getItem("idvalue");
let titles= localStorage.getItem("titlevalue");
let imgs= localStorage.getItem("urlvalue");
let Thumbnais= localStorage.getItem("thumbnailUrlvalue");



 let container =document.createElement("div");
 container.className ="container";
 document.body.appendChild(container);
 
 let albumId = document.createElement("p");
 albumId.innerText= `Album Id: ${albums}`;

 let id = document.createElement("p");
 id.innerText= `Id: ${ids}`;

 let title = document.createElement("p");
 title.innerText= `Title: ${titles}`;


 let url = document.createElement("p");
 url.innerText="Url:"
 let img = document.createElement("img");
img.className="col-lg-6";
 img.src=imgs;


 let secondUrl= document.createElement("p");
 secondUrl.innerText="ThumbnailUrl:"
 let thumbnailUrl= document.createElement("img");
 thumbnailUrl.src=Thumbnais;



 container.appendChild(albumId);

 container.appendChild(id);

 container.appendChild(title);

 container.appendChild(url);

 container.appendChild(img);

 container.appendChild(secondUrl);
 
 container.appendChild(thumbnailUrl);





