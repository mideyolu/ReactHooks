//Fist import createcontext from 'react'
import { createContext } from "react"
import PropDrilling from "./PropDrilling"


//Next create and instance
export const Data = createContext();
export const Data1 = createContext();

const Propdrilling2 = () => {

  //next declare som variables
    const name = "Oluwuyi Dev";
    const age = 18;

  return (
    <>
     {/*3 Wrap our component into Provider Component*/}
     
    <Data.Provider value={name}>

        <Data1.Provider value={age}>

            <PropDrilling/>

        </Data1.Provider>

    </Data.Provider>

    </>
  )
}

export default Propdrilling2;