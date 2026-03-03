import { useRef } from "react";
import { Bounce, toast } from "react-toastify";

const UncontrolledFormHandling=()=>{
    const usernameRef=useRef(null)
    const maleRef=useRef(null)
    const femaleRef=useRef(null)
    const othersRef=useRef(null)


    const handleForm=(e)=>{
        e.preventDefault()
       const username=usernameRef.current.value
       
    //    if(!username){
    //      toast.error("All field are required",{position:"top-center",theme:"dark",transition:Bounce})
    //     return
    //    }
    //    console.log("hello");

    const gender=(maleRef.current.checked)?"male":(femaleRef.current.checked)?
    "female":(othersRef.current.checked)?"others":null
    console.log(gender);
    
       
        
        
    }
    return(
        <>
            <h1>Uncontrolledformhandling</h1>

            <form onSubmit={handleForm}>
                <input type="text" placeholder="enter your name" ref={usernameRef} />
                <br />

                <label htmlFor="male">
                    <input type="radio" value="male" id="male" name="gender" 
                    ref={maleRef} />Male
                </label>

                 <label htmlFor="female">
                    <input type="radio" value="female" id="female" name="gender" 
                    ref={femaleRef} />female
                </label>

                 <label htmlFor="others">
                    <input type="radio" value="others" id="others" name="gender" 
                    ref={othersRef} />Others
                </label>


                <button>Submit</button>



            </form>

        </>
    )
}
export default UncontrolledFormHandling