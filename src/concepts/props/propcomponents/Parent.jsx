import React from "react";
import Child from "./Child";

const Parent =()=>{
    
    
    return(
        <div id="parent" className="parent">
            <Child name="Madhu" age={"98"} email="madhu@gmail.com"/>
            <Child name="Mama" age={"24"} email="mama@gmail.com"/>
            <Child name="Gunu" age={"26"} email="gunu@gmail.com"/>

        </div>
    )
}
export default Parent