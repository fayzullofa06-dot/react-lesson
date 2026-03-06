

const Info=({inc,sub})=>{
   const storage=[inc,sub]
 console.log(storage)
    return(
        <>
        <h1 className="content">{inc}</h1>
        <h2 className="h">{sub}</h2>
    
        </>
    
    )
}

export default Info