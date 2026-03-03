import React, { useEffect, useState } from 'react'

const UseEffectHookHome = () => {
  const [count,setCount]=useState(0)
  const[val,setval]=useState(0)

  const fdata=()=>{
    console.log("fdata function");
  }

  // !Empty dependency
  // useEffect(()=>{
  //   fdata()
  // },[])

  // useEffect(()=>{
  //   fdata()
  // },[count])

  useEffect(()=>{
    fdata()
  })


  console.log("hello")
    
  return (
    <div>
       <h1> UseEffectHookHome</h1>
       <h2>{count}</h2>
       <h2>{val}</h2>
       <button onClick={()=>setCount(count+1)}>Update</button>
       <br /><br />
       <button onClick={()=>setval(val+10)}>Update Val</button>
    </div>
  )
}

export default UseEffectHookHome