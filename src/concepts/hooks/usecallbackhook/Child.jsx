import React from 'react'

const Child = ({data}) => {
    console.log("data")
  return (
    <div>
        <h1>Child</h1>
        <button className='p-3 bg-blue-500' onClick={data}>Delete</button>
    </div>
  )
}

export default React.memo(Child)