import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav className='h-[70px] w-screen     bg-gradient-to-r from-rose-200 to-indigo-600        flex items-center justify-around'>
            <div className='w-[15%] font-bold text-[25px] font-serif  flex items-center justify-center' >Logo</div>

            <div className='w-[70%] h-[70px]  flex justify-around  text-[18px] font-bold  '>
                <ul className='flex justify-between   items-center w-[50%] h-[70px] '>
                    <li  className='hover:underline hover:text-gray-700 text-white '><Link to='/home'>Home</Link></li>
                    <li  className='hover:underline text-white   hover:text-gray-700'> <Link to='/about'>About</Link> </li>
                    <li  className='hover:underline text-white  hover:text-gray-700'> <Link to='/project'> Project</Link> </li>
                    <li  className='hover:underline text-white  hover:text-gray-700'> <Link to='/contact'>Contact</Link>  </li>
                </ul>
            </div>

            <div className='h-[70px] w-[15%] flex justify-center items-center'>
                <button className='h-[50px] w-[120px] bg-blue-400 rounded-[20px] hover:bg-fuchsia-200 text-lg font-bold'><Link to="/login"> Login</Link></button>
            </div>

        </nav>

    </div>
  )
}

export default Navbar