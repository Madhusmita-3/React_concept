import { useState } from "react"
import Table from "./Table"

const UseStateTask3 = () => {
    const [userdata, setUserData] = useState([])

    const fdata = async () => {
        try {
            const data = await fetch("https://api.github.com/users")
            const res = await data.json()
            setUserData(res)
        }
        catch (error) {
            console.log("Error fetching data:", error);
        }
    }
    const deleteUser=(id)=>{
        const filterUsers=userdata.filter((ele)=>ele.id !==id)
        setUserData(filterUsers)
    }
    

    return (
       <div >
            <h1>UserData</h1>
            <button onClick={fdata}>Fetch UserData</button>
            <Table userdata={userdata} deleteUser={deleteUser}/>


           
        </div>
    )
}

export default UseStateTask3
