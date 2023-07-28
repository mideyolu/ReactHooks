import React, { useState } from 'react'

const ArrayObject = () => {

    const [movie, setMovie] = useState([

        {
            id: 1,
            title:"Spiderman",
            ratings:3,

        },
        {
            id: 2,
            title:"Man of Steel",
            ratings:8,

        }
    ])

    const handleChange = ()=>{

        setMovie(movie.map(m => m.id === 1 ? {...movie, title: "Green Arrow", ratings: 4 } : m ))
    }


  return (
    <>
    {
        movie.map(m =>(
            <section key={Math.random()}>
                <ul>
                    <li><h3>{m.title}</h3></li>
                    <li><small>{m.ratings}</small></li>
                </ul>
            </section>
        ))

    }
     <button onClick={handleChange}>Change Movie</button>
    </>
  )
}

export default ArrayObject