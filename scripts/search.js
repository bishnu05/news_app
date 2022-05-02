// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

let a = searchData()
    a.then((res)=>{
        appendData(res)
       
    })
import {searchData} from "./fetch.js";
let results = document.getElementById("results");
 function appendData(data){
     //console.log(data)
    
    results.innerHTML = null;
   data.articles.forEach((el) => {
      
      
    let news = document.createElement("div");
    news_div.setAttribute("class","news");
    news_div.addEventListener("click",function(){
        newsstorage(el)
    })

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let title = document.createElement("h3");
    title.innerText = el.title;

    let descr = document.createElement("p");
    descr.innerText = el.description;

    news.append(image,title,descr)
    results.append(news)

   });   
 }

 function newsstorage(el){
     localStorage.setItem("news",JSON.stringify(el));
     window.location.href = "news.html"
 }
