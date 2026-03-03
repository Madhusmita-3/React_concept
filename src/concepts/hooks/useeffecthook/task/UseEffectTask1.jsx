import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Table from "./Table"

const UseEffectTask1 = () => {
    const[product,setProduct]=useState([])

    const fdata=async()=>{
        try{
            const response=await fetch("https://fakestoreapi.com/products")
            const data=await response.json()
            setProduct(data)
        }
        catch (error) {
            toast.error("Failed to load the data.please try again later",{position:"top-center"})

        }
    }
    useEffect(()=>{
     fdata()
     },[])

     console.log(product)

      const deleteProduct=(id)=>{
      const filterProduct=product.filter((ele)=>ele.id !==id)
      setProduct(filterProduct)
    
   }

   const [asc, setAsc] = useState(true)

   const toggleSortId = () => {
   const sorted = [...product].sort((a, b) =>
    asc ? a.id - b.id : b.id - a.id
    )
   setProduct(sorted)
   setAsc(!asc)
  }
  return (
    <div>
        <h1>UseEffect</h1>
        {
            product.length===0?( <h1>Loading...</h1>):(<Table  data={product} deleteProduct={deleteProduct} toggleSortId={toggleSortId} asc={asc}/>)
        }

    </div>
  )
}

export default UseEffectTask1