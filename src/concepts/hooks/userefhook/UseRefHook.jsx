import { useRef } from "react"

const UseRefHook=()=>{
    const nameRef=useRef()

    const updateText=()=>{
        nameRef.current.innerText="Leela"
    }

    console.log("hii");
    
    return(
        <div>
            <h1 ref={nameRef}>Sunadri</h1>
            <button onClick={updateText}> Update Name</button>

        </div>
    )
}
export default UseRefHook