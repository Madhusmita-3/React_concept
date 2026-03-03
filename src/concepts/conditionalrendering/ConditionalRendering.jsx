const ConditionalRendering =()=>{

    // !What is conditional Rendering
    // it helps to render a component or element based on a condition
    let value=false

    if(value){
        return(
            <div>
                <h1>Hello</h1>
            </div> 
        )

    }
    else{
        return(
            <div>
                <h1>Bye</h1>
            </div>
        )

    }
}
export default ConditionalRendering