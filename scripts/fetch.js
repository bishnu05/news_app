let countryNews = async (country_code) =>{
    console.log(country_code)
    try{
        const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`
        let res = await fetch(url)
        let data = await res.json()
        //console.log(data)
        return data;
        // appendData(data,results)
    }
    catch(err){
        console.log(err)

    }
}

 export {countryNews}

 let searchData = async ()=>{
    let search = localStorage.getItem("search");
    console.log(search)
    try{
        const url = `https://masai-mock-api.herokuapp.com/news?q=${search}`
        let res = await fetch(url)
        let data = await res.json()
        //console.log(data)
        return data;
        // appendData(data,results)
    }
    catch(err){
        console.log(err)

    } 
}
searchData()
export {searchData};