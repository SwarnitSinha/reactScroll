import React, {useState, useEffect} from 'react'
import './ScrollList.css'
import {fetchTrendingSongs} from '../Utils/getApiData'
import RecommendedData from '../Data/RecommendedData'
import Trendingitems from '../Data/Trendingitems'
import ReleasedData from '../Data/ReleasedData'
import Cards from './Cards'

function ScrollList(props) {
    const [value,setValue] = useState(props.song)
    const [songs,setSongs] = useState([])

    const [src,setSrc] = useState('mp3_thumbnail_b')
    const [title,setTitle] = useState('')
    const [divClassName, setDivClassName] = useState('')
    
    // let src
    useEffect(()=>{
        
        if(value==1){
            
            setSongs(Trendingitems.BAAHI_BY_XOMOY)
            setSrc("mp3_thumbnail_b")
            setTitle("mp3_title")
            setDivClassName("trends")
        }
        else if(value == 2){
            setSongs(ReleasedData.BAAHI_BY_XOMOY)
            setSrc("mp3_thumbnail_b")
            setTitle("mp3_title")
            setDivClassName("release")
        }
        else{
            setSongs(RecommendedData.BAAHI_BY_XOMOY)
            setSrc("artist_image_thumb")
            setTitle("artist_name")
            setDivClassName("recommended")
        }

    },[])
    console.log(divClassName)
  return (
    <div className='Scrollable-view'>
        <h2>{props.heading}</h2>
        {/* {console.log(trendingSongs)} */}
        <div className={divClassName}>
            {songs.map((song)=>{
                return (
                    <Cards src={song[src]} title={song[title]} type={value} value={value} key={song.id}/>
                )
            })
        }   
        </div>
    </div>
  )
}

export default ScrollList