import { Fragment } from "react"

const ListAndKeys=()=>{
    let arr=['mama','lila','mama','rupa']
    return(
        <div>
           {
            arr.map((ele,index)=>{
                return(
                    <Fragment key={index}>
                        <h1 >{ele}</h1>
                        <p>hello</p>
                    </Fragment>
                )
            })
           }

        </div>
    )
}
export default ListAndKeys


// if use keyprops then  we used react fragment
// reactfragment at a time pass one keyprops
// empty fragment not accept any attribute

