import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainpage from './components/Mainpage'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRouting from './privaterouting/PrivateRouting'


const RouterLayout = () => {
    const routes=createBrowserRouter([
       {
        path:"/",
        element:<Mainpage/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>

            },
            {
                path:"/project",
                element:<Project/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/dashboard",
                element:<PrivateRouting>
                        <Dashboard/>
                      </PrivateRouting>
            }

        ]

       }
    ])
  return  <RouterProvider router={routes}/>
    
  
}

export default RouterLayout