import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photos from './components/Photos'

function App() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get(url) 
      .then(response => {
        //debugger
        console.log(response.data)
        setPhotos(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  
  return (
    <div className="App">
      <div className='photos'>
        <Photos data={photos}/>
      </div>
    </div>
  );
}

export default App;
