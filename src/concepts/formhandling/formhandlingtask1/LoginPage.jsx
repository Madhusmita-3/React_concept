import { CiLock } from "react-icons/ci"
import { FaFacebookF, FaGoogle, FaRegUser } from "react-icons/fa"
import LOG from "../../../assets/img2.png";
import { useRef } from "react";
import { Bounce, toast } from "react-toastify";

const LoginPage=()=>{
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleForm = (e) => {
    e.preventDefault()

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.error("All fields are required", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      })
      return
    }

    console.log("username:", username);
    console.log("password:", password);

    

    toast.success("Login successful!", {
      position: "top-center",
      theme: "dark",
    })
  } 
    return(
        <div className="container">
            <div className="main">
                <div className="left">
                    <div className="ditails">
                        <h1>LOGIN</h1>
                        <p>How to I get started lorem ipsum dolar at?</p>


                     <form onSubmit={handleForm}>
                        <div className="input-box">
                          <FaRegUser className="icon" />
                          <input type="text" placeholder="Username"  ref={usernameRef}/>
                        </div>                       
                        <div className="input-box">
                            <CiLock className="icon" />
                          <input type="password" placeholder="Password" ref={passwordRef} />
                        </div>
                        <button type="submit" className="btn">Login Now</button>
                     </form>  
                      
                        
                        <div className="divider">
                          <hr />
                          <span><strong>Login</strong> with Others</span>
                          <hr />
                        </div>

                       
                        <button className="social-google"><a href="">
                            <span> <FaGoogle size={20} /></span>
                            Login with <strong>google</strong></a></button>
                        
                        <button className="social-facebook"><a href="">
                            <span><FaFacebookF size={20} /></span>
                            Login with <strong>facebook</strong></a></button>

                    </div>
                </div>
                <div className="right">
                    <div className="rmid">
                        <img src={LOG} alt="Login illustration" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default LoginPage