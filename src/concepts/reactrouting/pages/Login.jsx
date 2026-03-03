import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { Navigate,  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const[passwordIcon,setpasswordIcon]=useState()
  const eyeRef=useRef(false)
  const navigate=useNavigate()
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
   
  const togglePassword=( )=>{
    console.log('password')
    
  }



  const handleForm = (e) => {
    e.preventDefault()
    localStorage.setItem("jwt_token",JSON.stringify('madhusmita'))
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-emerald-200 p-15 rounded-2xl shadow-xl w-[450px]">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>

        <form onSubmit={handleForm} className="flex flex-col gap-4">
          <input type="text" name="username"  placeholder="Username"  value={formData.username} onChange={handleInput}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>

         <div className="flex items-center border border-gray-300 p-2 rounded-lg focus-within:ring-2 focus-within:ring-purple-400">
          <input   type={ passwordIcon?"text":"password"}  name="password"  placeholder="Password"   value={formData.password}   onChange={handleInput}   className="flex-1 outline-none"  />
         
          <div className="absolute right-130 cursor-pointer" onClick={() => setpasswordIcon(!passwordIcon)}
>           
             {
             passwordIcon ? (
               <AiOutlineEyeInvisible size={20} />
             ) : (
               <AiOutlineEye size={20} />
             )}
        </div>
          
         </div>

          <button  type="submit"  className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300" >
           Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don't have an account?
          <span className="text-purple-600 cursor-pointer hover:underline ml-1">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login