import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdHeartBroken } from "react-icons/md";
const UseStateHookTask1=()=>{
    const[proposal,setProposal]=useState(false)
    const acceptProposal=()=>{
        setProposal(true)

    }
    const rejectProposal=()=>{
        setProposal(false)
    }
    const reset=()=>{
        setProposal(null)
    }
    
    return(
        <div className='mainbox'>
            
            <div className="box">
                {
                   proposal===null? <IoIosHeartEmpty />:(proposal===true)?<GoHeartFill  fill="red"/>:<MdHeartBroken fill="red" />
                }
                {/* <FaRegHeart  size={200}/> */}
                <div className="btn">
                    <button  onClick ={acceptProposal} className="accept">Accept😍</button>
                    <button onClick={rejectProposal} className="reject">Reject😭</button>
                    <button onClick={reset} className="reset">Change Mind</button>
                </div>
            </div>

        </div>
    )
}
export default UseStateHookTask1