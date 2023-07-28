import useHooks from "./UseHooks"

const Project = () => {

    const [data] = useHooks( "https://jsonplaceholder.typicode.com/todos")
   

  return (
    <>
    {
        data && data.map(item =>{
            return <p key={item.id}>{item.title}</p>
        })
    }
    </>
  )
}

export default Project