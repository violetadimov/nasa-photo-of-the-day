import React from "react"; 


function Photos(props) {
    // const { photos } = props

    return (
        <div className='image-container'>
            <h1> {props.data.title}</h1>
            <img src={props.data.hdurl} alt='' />
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default Photos;