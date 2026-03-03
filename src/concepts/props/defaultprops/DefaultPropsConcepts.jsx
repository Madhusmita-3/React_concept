import Card from "./Card"

const DefaultPropsConcepts=()=>{
    const arr=[
        {
            username:"Sundari",
            age:22
        },
        {
            age:23
        },
        {
            username:"Lusi",
            age:35
        }
    ]
    return(
        <div>
            {
                arr.map((ele)=>{
                    return(
                        <Card user={ele}/>

                    )
                    

                })
                
            }
            

        </div>
    )
}
export default DefaultPropsConcepts