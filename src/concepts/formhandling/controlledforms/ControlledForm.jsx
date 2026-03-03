import React, { useState } from 'react'

const ControlledForm = () => {
    // const [username,setUsername]=useState("")
    // const handleInput=(e)=>{
    //    const {name,value}=e.target
    //    setUsername(value)
    // }
    // const handleForm=(e)=>{
    //     e.preventDefault

    // }

    
    const [formData,setformData]=useState({
        username:"",
        email:"",
        password:"",
        phno:""
    })

    const [errors,setErrors]=useState(null)


    const handleInput=(e)=>{
       const {name,value}=e.target
       setErrors(null)
       setformData({...formData,[name]:value})
    }
    const handleForm=(e)=>{
        e.preventDefault()
        if(!formData.username || !formData.password || !formData.email ||!formData.phno){
            setErrors(true)
        }
        setformData({
            username:"",
            password:"",
            email:"",
            phno:""
        })
       
        

    }
  return (
    <div>

        <form onSubmit={handleForm}>
            <input type="text" placeholder='username' name='username'  onChange={handleInput} value={formData.username} /> <br /><br />
            {

                errors? <p style={{color:"red"}}>Username is required <sup>*</sup></p>:""
            }
           
             <input type="email" placeholder='email' name='email'  onChange={handleInput}  value={formData.email}/>
            <br />
            {

                errors? <p style={{color:"red"}}>Email is required <sup>*</sup></p>:""
            }
             <input type="password" placeholder='password' name='password'  onChange={handleInput} value={formData.password} />
            <br />
            {

                errors? <p style={{color:"red"}}>Password  is required <sup>*</sup></p>:""
            }
             <input type="number" placeholder='phno' name='phno'  onChange={handleInput} />
            <br /> 
            {

                errors? <p style={{color:"red"}}>Phone Number is required <sup>*</sup></p>:""
            }
            <button>Submit</button>
        </form>
        <h1>{formData.username}</h1>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
        <h1>{formData.phno}</h1>
    </div>
  )
}

export default ControlledForm