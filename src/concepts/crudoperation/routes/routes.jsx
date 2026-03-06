import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../../reactrouting/pages/Home";
import About from "../../reactrouting/pages/About";
import Contact from "../../reactrouting/pages/Contact";
import Help from "../pages/Help";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRouting from "../privaterouting/PrivateRouting";



export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
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
                path:"/help",
                element:<Help/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:'/dashboard',
                element:<PrivateRouting>
                    <Dashboard/>
                </PrivateRouting>
            }

        ]
    }
])