import React from 'react'

const TailwindcssConcept = () => {
    const arr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='w-screen h-auto  flex flex-wrap gap-25  justify-center p-0'>
        {/* <h1 className='bg-[#bcbfcf] text-emerald-400  text-[50px] underline uppercase'>
            TailwindcssConcept
        </h1>
        <h1 className='bg-blue-500 text-[100px] text-fuchsia-400'>Hii</h1> */}

        {
            arr.map((ele,index)=>{
                return(
                    <div  key={index}  className='w-[300px]  h-[300px] bg-gray-400 border-2 border-red-300  rounded-2xl justify-center shadow-2xl shadow-blue-400 items-center cursor-pointer hover:bg-emerald-300  hover:scale-105 transition-all duration-[2s] animate-spin'>
                        {ele}
                        </div>
                )

            })

        }

        
    </div>
  )
}

export default TailwindcssConcept