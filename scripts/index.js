// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js"
let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("search_input").value;
        searchImages(value).then((data)=>{
           
         console.log(data);
         let container=document.getElementById("sidebar")
         container.innerHTML=null;
         append(data.results,container)
        })
    }
};

document.getElementById("query").addEventListener("keydown",search);

let category=document.getElementById("sidebar").children;

function cSearch(){
    console.log(this.id)
    searchImages(this.id).then((data)=>{
        console.log(data);
        let container=document.getElementById("sidebar");
        container.innerHTML=null;
        append(data.results,container)
    })
}

for(el of category){
    el.addEventListener("click",cSearch)
}