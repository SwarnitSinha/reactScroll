import React from 'react'
import ScrollList from './Components/ScrollList';

function App() {

  return (
    <div className="App">
        <ScrollList heading={"Trending Songs"} column={5} song = {1}/>
        <div className='smaller-scroll'>
            <div className="rel" >
              <ScrollList heading={"Just Released"} column={2} song={2}/>
            </div>
            <div className = "recom">
              <ScrollList heading={"Recommended Artist"} column={1} song={3}/> 

            </div>
        </div>
        
    </div>
  );
}

export default App;
