import React from 'react'
import "./table.css"

const Table = ({data,deleteProduct,toggleSortId,asc}) => {
  
  return (
    <table>
        <thead>
            <tr>
            <th>ID 
                <button onClick={toggleSortId}>
                 Sort ID {asc ? "↑" : "↓"}
                </button>
            </th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
           
                {
                    data.map((ele,index)=>{
                        return(
                            <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td><img src={ele.image} alt=""  width={100}/></td>
                                <td><button onClick={()=>deleteProduct(ele.id)}>Delete</button></td>

                            </tr>

                        )
                    })
                }
           

        </tbody>
    </table>
  )
}

export default Table