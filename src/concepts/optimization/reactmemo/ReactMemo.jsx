import React, { useState } from 'react'
import Child from './Child'

const ReactMemo = () => {
    const [count,setCount]=useState(0)
    console.log("parent")
  return (
    <div>
        <h1>ReactMemo</h1>
        <p>{count}</p>
        <button className='p-2 bg-cyan-300 text-white cursor-pointer' onClick={()=>setCount(count+1)}>Update</button>
        <hr />
        <h1><Child name="Madhu"/></h1>
    </div>
  )
}

export default ReactMemo