 import './Title.css'
 
 const Title=({hab,task})=>{
    
        return (
      <div className='title-block'>
      <h1 className="title">{hab}</h1>
      
    <p className="subtitle">{task}</p>
      </div>
    )
 }
 export default Title