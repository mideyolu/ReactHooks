import React, { useState } from 'react'

const State = () => {
    const [friends , setFriends]= useState(['olu','mide']);

    const addOne = ()=>
        setFriends([...friends, "olu"])
    
    const removeOne = ()=>{
        setFriends( friends.filter(f=> f !=="olu"))

    }
    const updateOne = ()=>{
        setFriends(friends.map (f => f ==="olu" ? "Oluwuyi Olumide" : f ))

    }
  return (
   <>
        {
         

            friends.map((f)=> <li key={Math.random()}>{f}</li>)

          
        }
          <button onClick={addOne}>Add One</button>
          <button onClick={removeOne}>Remove One</button>
          <button onClick={updateOne}>Update One</button>
   </>
  )
}

export default State