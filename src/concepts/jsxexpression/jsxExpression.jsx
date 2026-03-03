import React from "react";

const JsxExpression =()=>{
    //jsx expression is used to access the js variable or functions inside the jsx | html

    // syntax --->  {}

    //!Note:--- inside the jsx expression is not possible to declare a variable but initialization is possible

    // ! How to use js function  ||  How to call js functions
    //? if a function is returninga jsx element then only we called as a component, if it's not returning any jsx element then it is called js function.


    // !inside the jsx expression if we want to use conditional statement then we need to use ternary operator. if i want to use loop then map method.



    let username="madhusmita"


    let demo=()=>{
        console.log("demo function");
        
    }

    let is_active=false
    if(is_active ===true){
        console.log("true block");
        
    }
    else{
        console.log("false block");
        
    }
    
    let arr=["madhu","mama","sima"]
   
    return(
        <div>
            {/* <h1>{username}</h1>
            {username="Misty"}
            <br />
            {username}      */}
            
            

           {/* { 
           let val=20;
           } */}

           <button onClick={demo}>Click</button>
           {
            is_active?<h1> i am safe</h1> : <h1> i am dead</h1>

            }
            {
                arr.map((user)=>{
                    return(
                        <h1>{user}</h1>
                    )
                })
            }
            <hr />

            <h1>{arr[0]}</h1>
            <h1>{arr[1]}</h1>
            <h1>{arr[2]}</h1>

            <hr />
            {
                arr.map((ele)=>{
                    return <h1>{ele}</h1>

                })
            }
           
        </div>
    )
}
export default JsxExpression