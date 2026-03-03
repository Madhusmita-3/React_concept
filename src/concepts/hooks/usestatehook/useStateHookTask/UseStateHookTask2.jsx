import { useState } from "react"

const UseStateTask2=()=>{
    const[userData,setUserData]=useState({
        username:"Sundari",
        age:22,
        email:"sundari@gmail.com",
        phone:56735786809,
        gender:"Female",
        loc:"BBSR",
        b_group:"A+"
    })
    const{username,age,email,phone,gender,loc,b_group}=userData


    const updateName=()=>{
        const newvalue=prompt("enter your name:")
        setUserData({...userData,username:newvalue})
    }
    return(
        <div>
            <div className="card">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <div className="data">
                <h2>{username}</h2>
                <p>{age}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{gender}</p>
                <p>{loc}</p>
                <p>{b_group}</p>
                </div>
                
            </div>

        </div>
    )
}
export default UseStateTask2