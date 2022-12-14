import React, {useState,useEffect} from 'react'
import './Cards.css'
function Cards(props) {
    const value = props.type;
    

    // useEffect(()=>{
    //     if(value==1){
    //         setDivClassName("trends")
    //     }
    //     else if(value==2){
    //         setDivClassName("released")
    //     }
    //     else{
    //         setDivClassName("recommended")
    //     }   
    // },[])
    // console.log(value)
   
  return (
    <div className='card'>
        <img className="thumbnailImg" src ={props.src}/>
        <h3 className='title'>{props.title}</h3>
    </div>
  )
}

export default Cards