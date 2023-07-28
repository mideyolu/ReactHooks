const handleClick = (a,b)=>{
    console.log(a+b);
}

const Button = ()=>(

    <button onClick={()=>handleClick(2,2)}>Click</button>
)
const copyHandler = ()=>{
    alert("Invalid")
}
const Copy = ()=>{
    return <>
    <p onCopy={()=>copyHandler()}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nostrum quasi labore.</p>
    
    
    </>
}

const moveHandler = ()=>{
    console.log("moved");
}

const Move = ()=>{
    return (
        <>
        <p onMouseMove={()=>moveHandler()}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione similique cupiditate.</p>
        
        </>
    )
}


const Event = () => {
  return (
    <>
    <Button/>
    <Copy/>
    <Move/>
    
    </>
  )
}

export default Event