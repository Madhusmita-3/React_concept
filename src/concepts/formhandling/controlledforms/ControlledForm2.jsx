import React, { useState } from 'react'

const ControlledForm2 = () => {
     const [formData,setformData]=useState({
            username:"",
            email:"",
            password:"",
            course:""
        })

        const{username,email,password,course}=formData

        const handleInput=(e)=>{
            const{name,value}=e.target 
            setformData({...formData,[name]:value})
        }

        const handleForm=(e)=>{
            e.preventDefault()
            // !write a logic to send to the data to backend
            console.log(formData)

            setformData({
                username:"",
                email:"",
                password:"",
                course:""
            })
        }

  return (
    <div>
        <form onSubmit={handleForm}>
            <div>
                <input type="text" placeholder='Your name' name='username' value={username} onChange={handleInput} />
            </div>
            <div>
                <input type="email"  placeholder='your email' name='email' value={email} onChange={handleInput}/>
            </div>
            <div>
                <input type="password" placeholder='your password'  name='password' value={password} onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Course</label>
                <select name="course" value={course} onChange={handleInput}>
                    <option value=""></option>
                    <option value="MCA">MCA</option>
                    <option value="MTech">MTech</option>
                    <option value="BCA">BCA</option>
                    <option value="BTech">BTech</option>
                </select>
                
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm2