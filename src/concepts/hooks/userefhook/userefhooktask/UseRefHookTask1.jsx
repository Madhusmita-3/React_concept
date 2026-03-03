import { useRef } from "react"
import "./userefhook.css"
const UseRefHookTask1=()=>{

    const themeRef=useRef()
    
    const changetheme=()=>{
        themeRef.current.classList.toggle("dark")

        // console.log(themeRef.current.classList.value);
        
    }
    return(
        <div className="homepage demo remo" ref={themeRef}>
            <button onClick={changetheme}>Theme</button>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit necessitatibus provident quae distinctio ad dolorem ut tempore saepe, quam autem doloribus natus quod libero repellat veritatis suscipit rem cupiditate! Natus ad quae amet nulla. Ipsa sapiente accusamus culpa, quaerat itaque a placeat eos, laboriosam sunt quod nihil maiores recusandae illum consectetur dolore quisquam voluptatibus incidunt iusto nostrum. Voluptates at optio corporis deleniti saepe laudantium inventore ex cupiditate ab sunt sit ratione mollitia eaque sint omnis dicta fugiat, maiores dolorem modi aliquid. Iure officia quidem, veritatis iste aut temporibus maiores eos labore fuga odit voluptatibus ipsam aliquam! Sit fugiat consequuntur provident!</p>
           
        </div>
    )
}
export default UseRefHookTask1