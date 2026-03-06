import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });


const navigate =useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleForm = async(e) => {
    e.preventDefault();
    const {data}=await axios.get("http://localhost:3000/users")
    console.log(data)
    const curreenuser=data.find((ele)=>(ele.email===formdata.email) )
    console.log(curreenuser)
    if(! curreenuser){
      toast.error("Email id is not register")
      return
    }
    if(curreenuser.password!==formdata.password){
      toast.error("Invalid Password")
    }


    

//!generate a token and store the token in local storage

const token="vhgweehrioewurjok.iewr879453njhuw832yt8h23"+curreenuser.id
localStorage.setItem("jwt_token",JSON.stringify(token))
localStorage.setItem("user_id",curreenuser.id)


toast.success("Login Successfull",{position:"bottom-right"})
navigate("/dashboard")
    setformdata({
      email: "",
      password: ""
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white h-[420px] w-[600px] rounded-2xl shadow-xl flex items-center justify-center flex-col gap-6">
        
        <h2 className="text-3xl font-bold text-slate-800">
          Login
        </h2>

        <form className="w-[80%] space-y-5" onSubmit={handleForm}>
          
          <div>
            <label className="block text-sm font-medium text-slate-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleInput}
              className="w-full h-[45px] border border-slate-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleInput}
              className="w-full h-[45px] border border-slate-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[45px] bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;