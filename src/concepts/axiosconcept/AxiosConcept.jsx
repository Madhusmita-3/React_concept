import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosConcept = () => {

    const[products,setProducts]=useState([])


    const fdata=async()=>{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        console.log(data)
    }

    useEffect(()=>{
        fdata()
    },[])

  return (
    <div>

    {
        products.length===0 ? <h1>Loading.......</h1>:
        products.map((ele)=>{
            return(
                <h1>{ele.title}</h1>
            )
        })
    }

    </div>
  )
}

export default AxiosConcept