let searchImages=async(value)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data=await res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err)
    }
}

let append=(data,container)=>{
     data.forEach=()=>{
           let div=document.createElement("div")
           div.setAttribute("class","news")
           let img=createElement("img");
           img.src=img ;
           let title=document.createElement("h3")
           title.innerHTML=title;
           let description = document.createElement("h3")
           description.innerHTML=description;
           div.append(img,title,description)
           container.append(div)
     }
}