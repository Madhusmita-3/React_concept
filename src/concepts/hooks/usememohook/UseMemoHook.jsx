import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const[count,setCount]=useState(0)
    const expensiveCalculation=useMemo(()=>{
        let sum=0
        for (let i=1;i<=1000000;i++){
            sum+=i

        }
        return sum
    },[])
    console.log(expensiveCalculation)
  return (
    <div>
        <h1>UseMemoHook</h1>
        <h1 className='text-6xl'>{count}</h1>
        <button onClick={()=>setCount(count+1)} className='p-4 bg-amber-300'>Update</button>
    </div>
  )
}

export default UseMemoHook