import React, { useState } from 'react'

const UseStateCase = () => {
    const [count,setcount]=useState(0)
    const updateCount=()=>{
        setcount((prevState)=>prevState+1)
        setcount((prevState)=>prevState+1)
        setcount((prevState)=>prevState+1)

    }
  return (
    <div>
        <h1>{count}</h1>
        <button className='border' onClick={updateCount}>update</button>
    </div>
  )
}

export default UseStateCase