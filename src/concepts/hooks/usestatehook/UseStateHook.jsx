import React,{useState} from "react"

const UseStateHook=()=>{
      //it is used to strore
     const [count,setCount]= useState(0)
    
     const updateValue=()=>{
        setCount(count+1);
        
     }

     const sub=()=>{
        setCount(count-1)

     }
     const reset=()=>{
        setCount(0)
     }
     console.log("Hello Madhu");
     

    return(
        <div>
           <h1> {count}</h1>
            <br/>
            <button  onClick={updateValue} >+1</button>
            <button  onClick={sub} >-1</button>
            <button  onClick={reset} >reset</button>
        </div>
    )
}
export default UseStateHook