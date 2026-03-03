import React from 'react'
import { data } from 'react-router-dom'

const C4 = () => {
    const updatedata={...data,message:'I hate you' }
  return (
    <div>
        {updatedata}
       
    </div>
  )
}

export default C4