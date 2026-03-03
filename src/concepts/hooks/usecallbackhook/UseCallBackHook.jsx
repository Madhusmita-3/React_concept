import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const[count,setCout]=useState(0)
    console.log("Parent")

    const deleteUser=useCallback(
        ()=>{
        console.log(" user deleted")
    },[] )
  return (
    <div>
        <h1>UseCallBackHook</h1>
        <p className='text-5xl'>{count}</p>
        <button onClick={()=>setCout(count+1)} className='p-4 bg-amber-400 text-white' >Update</button>
        <Child data={deleteUser}/>
    </div>
  )
}

export default UseCallBackHook