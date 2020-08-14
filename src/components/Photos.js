import React from "react"; 


function Photos(props) {
    const { photos } = props
    function photoOfTheDay(){
        photos.map((photo) => {
          return <img src={photo.img_src} alt='' key={photo.id}></img>
        })
      }
    return (
        <div className='image-container'>
            {photoOfTheDay}
        </div>
    )
}

export default Photos;