import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const reducer=(state,action)=>{
      switch (action){
          case "INCRE":
             return state+1

          case "DECRE":
            return state-1 ;

          case "RESET":
            return 0;

          default:
            return state;      
        }

    }
    const [count,dispatch]=useReducer(reducer,0)
    console.log(count)
  return (
    <div>
      <h1 className='text-5xl'>{count}</h1>
      <button className='border' onClick={()=>dispatch('INCRE')}>Icrement</button>
      <button className='border' onClick={()=>dispatch('DECRE')}>Decrement</button>
      <button className='border' onClick={()=>dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default UseReducerHook