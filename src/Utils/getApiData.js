import axios from 'axios'


const URL1 = "https://pastebin.com/raw/hbAZZiJx"
const URL2 = "https://pastebin.com/raw/CwyxSJ8K"
const URL3 = "https://pastebin.com/raw/1dN1EkTY"

export const fetchTrendingSongs = async ()=>{
    try{
        const TrendingSongs = await axios.get(URL2);
        console.log(TrendingSongs)
    }
    catch(error){
        console.log(error);
    }
    
}
