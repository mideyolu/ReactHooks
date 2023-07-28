import { useState } from "react"

//control form

const Forms = () => {

    const [username, setUsername] = useState('')

    const handleChange = (e)=>{
        setUsername(e.target.value)


    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`You typed ${username}`)
        setUsername('')
    }


  return (
     <>
     <h1>Form Demo</h1>

     <form onSubmit={handleSubmit}>

        <input type="text" value={username} onChange={handleChange} />

        <button>Submit</button>
     </form>
     
     </>
  )
}

export default Forms