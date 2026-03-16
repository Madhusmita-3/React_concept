import React, { useReducer } from 'react'

const UseReducerfromHandle = () => {
    const  initialform={
        username:"",
        age:"",
        email:""
    }

    const  fromreducer=(state,action)=>{
        switch (action.type){
            case "update":{
                return {...state,...action.payload}
            }
            case "submit":{
                console.log("final data")
                console.log(action.payload)
            }
            case "clear":{
                return initialform;
            }
            default:
                return state
            


        }


    }

   const[formdata,dispatch]=useReducer(fromreducer,initialform)
    const handleInput=(e)=>{
        const {name,value}=e.target
        dispatch({type:"update",payload:{[name]:value}})

    }
    const handleFrom=(e)=>{
        e.preventDefault()
        dispatch({type:"submit",payload:formdata})
        dispatch({type:"clear"})


    }
  return (
    <div className='h-[100vh] w-full  flex justify-center items-center'>
        <form  onSubmit={handleFrom}    action="" className='h-[300px] w-[300px] flex justify-center items-center'>
            <input type="text"  onChange={handleInput}  placeholder='Your name' name='username'  className='border' />
            <input type="number"    onChange={handleInput} name='age' placeholder='age' className='boder' />
            <input type="email"  onChange={handleInput}  name='email' placeholder='email' className='boder' />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default UseReducerfromHandle