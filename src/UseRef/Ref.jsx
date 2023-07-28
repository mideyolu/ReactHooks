import { useRef } from 'react'


const Ref = () => {
    const Inputelement = useRef(null)

    const focusInput = ()=>{
        Inputelement.current.focus();
        Inputelement.current.value= "Oluwuyi"
    
       

    }
  return (
    <>
    <input type='text' ref={Inputelement}/>

    <button onClick={()=> focusInput()}>Clcik</button>
    </>
  )
}

export default Ref