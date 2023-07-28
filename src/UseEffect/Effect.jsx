import { useEffect, useState } from "react"

const Effect = () => {
    const [data, setData] = useState([])

    {/*Working with use Effer*/}

     //Renders for the first time
     //Anytime we do (side effect)
     //Dependeny Array



    useEffect(()=>{

        async function getData (){
            const response  = await fetch ("https://jsonplaceholder.typicode.com/posts");
            const data =  await response.json();

            if(data && data.length) setData(data)
        }

        getData();

    },[])


  return (
    <>
       <ul>
        {
            data.map(item =>{
                <li key={Math.random()}>{item.title}</li>
            })
        }
       </ul>
   
    </>
  )
}

export default Effect