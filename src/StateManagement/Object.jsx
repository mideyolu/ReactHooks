import React, { useState } from 'react'

const Object = () => {

    const
        [movie , 
        setMovie] = 

        useState(
        {
            title:"Equalizer 3",
            ratings:8.9

        }
    );

    const changeRatings = ()=>{
        
        const copyMovie = {
            ...movie,
            ratings:5
        }

        //short method
        // setMovie({...movie, ratings:5})

        setMovie(copyMovie)
    }
  return (
    <>
    <h1>{movie.title}</h1>
    <h2><small>{movie.ratings}</small></h2>
    <button onClick={changeRatings}>Change Ratings</button>
    </>
  )
}

export default Object