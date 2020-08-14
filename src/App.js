import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photos from './components/Photos'

function App() {
  const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get(url) 
      .then(response => {
        debugger
        console.log(response.data)
        setPhotos(response.data.photos)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  
  return (
    <div className="App">
      <div className='photos'>
        <Photos photos={photos}/>
      </div>
    </div>
  );
}

export default App;
