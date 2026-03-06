import React from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { IoHelpBuoyOutline, IoHome } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navlist=[
        {
            text:"home",
            path:"/",
            icon:<IoHome />
        },
        {
            text:"about",
            path:"/about",
            icon:<CiCircleInfo />
        },
        {
            text:"contact",
            path:"/contact",
            icon:<MdEmail />

        },
        {
            text:"help",
            path:"/help",
            icon:<IoHelpBuoyOutline />
        },

    ]
  return (
    
        <nav className="bg-slate-900 shadow-lg w-full h-19.5 text-gray-200 flex justify-around" >
            <div className='w-10% h-full flex items-center justify-center text-3xl font-extrabold'>
                Logo
            </div>

            <ul  className='w-[50%] h-full flex items-center justify-around capitalize'>
               

                {
                    navlist.map((ele,index)=>{
                        return(
                            <li key={index} className='rounded-2xl cursor-pointer text-lg flex items-center justify-center'>{ele.icon}
                            <Link to={ele.path}>{ele.text}</Link> 
                            </li>

                        )
                    })
                }

            </ul>

            <div className='w-[10%] h-full flex items-center justify-center'>
               <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       text-white h-[50px] w-[100px] rounded-2xl
                       font-semibold tracking-wide
                       shadow-lg hover:shadow-xl 
                       hover:scale-105 
                       transition-all duration-300">
                          <Link to='/login'>Login</Link>
                        </button>
            </div>

        </nav>
     
  )
}

export default Navbar