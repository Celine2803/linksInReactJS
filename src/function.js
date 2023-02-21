import {useState} from 'react'

function App1(){
    const[name,setName]=useState("Celine")
    return(
    <div><h1>My name is {name}</h1> 
    <button 
    type='button'
    value={name} 
    onClick={()=>setName('John')}>Change name
    </button>
    </div>  )
        
      
  }
 
      
export default App1;