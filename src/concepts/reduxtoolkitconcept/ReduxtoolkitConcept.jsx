import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counterslice'

const ReduxtoolkitConcept = () => {
    const result = useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{result}</h1>
        <button className='border' onClick={()=>dispatch(increment())}>Increment +</button>
        <button className='border'onClick={()=>dispatch(decrement())}> Decrement -</button>
        <button className='border'onClick={()=>dispatch(reset())}>Reset 🔄️</button>
    </div>
  )
}

export default ReduxtoolkitConcept