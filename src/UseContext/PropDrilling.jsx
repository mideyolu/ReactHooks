import { useContext } from "react";
//Import the intances
import { Data, Data1 } from "./Propdrilling2";

const PropDrilling = () => {

  //Use them
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <>
    <h2>Working with useContext</h2>
    <h4>Your name is {name} and you are {age}</h4>
    </>
  )
}

export default PropDrilling;