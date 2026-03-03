import { useState } from "react";

const Child=({count })=>{
    console.log("child");
    const[val,setVal]=useState(10)
    
    
    
    return(
        <div>
            <h1>{count} in child</h1>
            <h2>{val} in child</h2>
            <button onClick={()=>setVal(val+1)}>update from child</button>
            

        </div>
    )
}
export default Child